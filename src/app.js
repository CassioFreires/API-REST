import express from 'express';
import routes from './routes.js';

const app = express();

// usar router
app.use(routes)

// indicar para o express ler dados no formarto json
app.use(express.json())



export default app;