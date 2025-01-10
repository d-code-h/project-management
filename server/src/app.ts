import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import searchRoutes from './routes/searchRoutes';
// import morgan from 'morgan';

// Configurations
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: 'cross-origin',
  }),
);
// // app.use(morgan('common'));
app.use(cors());

// Route imports
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/search', searchRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('This is home route');
});

// Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
