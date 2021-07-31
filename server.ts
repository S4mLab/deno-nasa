import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import router from './api.ts';

const app = new Application();
const PORT = 8000;

app.use(router.routes());
app.use(router.allowedMethods());

// end point
app.use(async (ctx) => {
  // pathname will just take the last part of that url, the file name
  const filePath = ctx.request.url.pathname;
  const fileWhiteList = [
    '/index.html',
    '/javascripts/script.js',
    '/stylesheets/style.css',
    '/images/favicon.png',
  ];

  if (fileWhiteList.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`,
    });
  }
});

app.listen({
  port: PORT,
});
