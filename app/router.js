const Router = require("koa-router");
const { health, fulfillment } = require("./services");

const noLogs = new Router(); // exclude koa logger to not spam console logs

noLogs.get("/", health);

const router = new Router();

router.post("/fulfillment", fulfillment);

module.exports = {
  noLogs,
  router
};
