import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { setupRoutes } from './routes/suratRoute';

const app = new Elysia()
  .use(cors())
  .use(setupRoutes)
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);