import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import podcastRoutes from './routes/podcastRoutes';
import errorHandler from './middleware/errorHandler';
import rateLimiter from './middleware/rateLimiter';
import  config  from './config';

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));
app.use(express.json());
app.use(rateLimiter);

app.use('/api/podcasts', podcastRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use(errorHandler);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;