import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import healthRoutes from './routes/health.routes';
import { notFound } from './middlewares/notFound.middleware';    
import { errorHandler } from './middlewares/error.middleware';   

const app = express();
//helmet
app.use(helmet());
//cors
app.use(cors());
//morgan
app.use(morgan('dev'));
//express json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", healthRoutes);

app.use(notFound);
app.use(errorHandler);








export default app; 