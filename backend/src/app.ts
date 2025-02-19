import express from 'express';
import cookieParser from 'cookie-parser';
import reportRoutes from './routes/report.routes';
import authRoutes from './routes/auth.routes';
import serverRoutes from './routes/server.routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3039'],
    credentials: true,
  })
);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/report', reportRoutes);
app.use('/auth', authRoutes);
app.use('/server', serverRoutes);

export default app;
