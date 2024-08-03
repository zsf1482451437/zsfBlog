const Router = require("koa-router");
const {
  getPageViews,
  incrementPageViews,
} = require("../viewModels/pageViewsViewModel");

const router = new Router();

router.get("/pageviews", async (ctx) => {
  const path = ctx.query.path;
  if (!path) {
    ctx.status = 400;
    ctx.body = { error: "路径参数是必需的" };
    return;
  }

  try {
    const count = await getPageViews(path);
    ctx.body = { count };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
  }
});

router.post("/pageviews", async (ctx) => {
  const path = ctx.query.path;
  if (!path) {
    ctx.status = 400;
    ctx.body = { error: "路径参数是必需的" };
    return;
  }

  try {
    const count = await incrementPageViews(path);
    ctx.body = { count };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
  }
});

module.exports = router;
