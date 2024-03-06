import { StatusCodes } from 'http-status-codes'
import { sendError, sendResponse } from '../handlers/response.handler';
import { createJWT } from '../helpers/token.helper';
import { ErrorHelper } from "../helpers/error.helper"
import { loginValidate, registerValidate } from "../validators/auth.validation"
import { controller_interface } from '../types/controller.interface'
import pool from "../services/connection.pool"
import brcrypt from "bcrypt";


const Login: controller_interface['basicController'] = async (req, res) => {
    try {
        const { error } = loginValidate.validate(req.body);
        if (error) {
            throw new ErrorHelper(error.message);
        }

        const { email, password } = req.body;

        let existingUser: Record<string, any> = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = existingUser[0][0];

        if (!user) {
            throw new ErrorHelper('Invalid Credentials', StatusCodes.UNAUTHORIZED);
        }

        const isPasswordCorrect = await brcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new ErrorHelper('Invalid Credentials', StatusCodes.UNAUTHORIZED);
        }
        // const existingToken = await prisma.Token.findOne({ user: user._id });

        // if (existingToken) {
        //     await prisma.Token.findOneAndDelete({ user: user._id });
        // }

        const token = createJWT({
            email: user.email,
            userId: user.id,
        });
        // const userAgent = req.headers['user-agent'];
        // const ip = req.ip;
        // const userToken = { token, ip, userAgent, user: user._id };

        // await prisma.Token.create(userToken);

        // res.cookie("token", token).status(200).json({ message: "Successfully logged!" });
        sendResponse(res, StatusCodes.CREATED, 'successfully logged!', true, { token });

    } catch (error: any) {
        sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message, false, error);
    }
};

const Register: controller_interface['basicController'] = async (req, res) => {
    try {
        const { error } = registerValidate.validate(req.body);
        if (error) {
            throw new ErrorHelper(error.message);
        }

        const { name, email, password } = req.body;


        const userAlreadyExists = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (!userAlreadyExists.length) {
            throw new ErrorHelper('This email is already registered!', StatusCodes.UNAUTHORIZED);
        }

        // Hash password
        const salt = await brcrypt.genSalt(10);
        const hashedPassword = await brcrypt.hash(password, salt);


        const results = await pool.execute('INSERT INTO users (name,email, password) VALUES (?, ?,?)', [name, email, hashedPassword]);


        sendResponse(res, StatusCodes.CREATED, 'successfully! registered', true, results);
    } catch (error: any) {
        sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message, false, error);

    }
};
const Logout: controller_interface['basicController'] = async (req, res) => {
    try {
        res
            .clearCookie("token", { sameSite: "none", secure: true })
            .status(200)
            .json("User logged out");
    } catch (error: any) {
        sendError(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message, false, error);

    }
};
export { Login, Register, Logout };
