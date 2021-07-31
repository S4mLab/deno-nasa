import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = 'NASA API Mission Control';
});

export default router;
