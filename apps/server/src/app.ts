import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';


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

app.get('/', (req, res) => {
 res.status(200).json({
    success: true,
    message: "Welcome to Scribbly API 🚀"
});
});







export default app; 