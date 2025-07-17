import { Elysia } from 'elysia';
import { suratController } from '../controllers/suratController';
import { staticPlugin } from '@elysiajs/static';

export const setupRoutes = new Elysia()
  .use(staticPlugin({ assets: 'public', prefix: '' }))
  .group('/api', (app) => app.use(suratController));