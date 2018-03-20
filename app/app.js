let env = process.env.NODE_ENV || "development";

// istanbul ignore next
if (env !== "test") {
  require("dotenv-safe").config({ silent: true }); // eslint-disable-line
  env = process.env.NODE_ENV || "development";
}

const koa = require("koa");
const winston = require("winston");
const koaLogger = require("koa-logger");
const koaBody = require("koa-body");
const { noLogs, router } = require("./router.js");

const app = (module.exports = koa());
const port = process.env.PORT || 8080;

// istanbul ignore next
app.use(noLogs.middleware());

// istanbul ignore next
if (env !== "test") {
  // only add koa logger for environments other than test
  app.use(koaLogger());
}

app.use(koaBody());
app.use(router.middleware());

// istanbul ignore next
if (!module.parent) {
  app.listen(port);
  winston.log("info", `App islistening on PORT:${port}`);
}
