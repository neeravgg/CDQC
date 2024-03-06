import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination: (req: any, file: Record<string, any>, cb: (err: Error | null, destination: string) => void) => {
        cb(null, 'src/uploads/');
    },
    filename: (req: any, file: Record<string, any>, cb: (err: Error | null, filename: string) => void) => {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`);
    },
});

const upload = multer({ storage });

export default upload;
