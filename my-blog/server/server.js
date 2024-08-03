const Koa = require("koa");
const cors = require("@koa/cors");
const pageViewsController = require("./controllers/pageViewsController");

const app = new Koa();

// 允许跨域请求
app.use(cors());

// 使用路由
app.use(pageViewsController.routes());
app.use(pageViewsController.allowedMethods());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});
