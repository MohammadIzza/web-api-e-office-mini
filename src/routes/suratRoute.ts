import { Elysia } from 'elysia';
import { suratController } from '../controllers/suratController';
import { staticPlugin } from '@elysiajs/static';

export const setupRoutes = (app: Elysia) =>
  app
    .use(staticPlugin({ assets: 'public', prefix: '' }))
    .group('/api', (app) => app.use(suratController));