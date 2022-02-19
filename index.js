// ====================================================== //
// ======================= Server ======================= //
// ====================================================== //

// ~~~~~~~~~~~~~ Dependencies ~~~~~~~~~~~~ //
// NPM Modules
const { connector } = require("swagger-routes-express"),
  SwaggerParser = require("swagger-parser"),
  express = require("express");
// Our Modules
const apiControllers = require("./api/controllers"),
  apiDocs = "api/config/openapi.yaml";

// ~~~~~~~~~~~~~ Server ~~~~~~~~~~~~ //

const port = 3000;

const parseApiDocs = async (_apiDocs) => {
  return await SwaggerParser.validate(_apiDocs);
};

const makeExpressApp = async () => {
  const app = express(),
    parsedApiDocs = await parseApiDocs(apiDocs),
    connect = connector(apiControllers, parsedApiDocs);
  connect(app);
  return app;
};

makeExpressApp()
  .then((app) => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log("Available routes:", getAllRoutePaths(app));
    });
  })
  .catch((err) => {
    console.log(err);
  });

// ~~~~~~~~~~~~~~~~ Utils ~~~~~~~~~~~~~~~~ //

const getAllRoutePaths = (app) => {
  return app._router.stack.filter((r) => r.route).map((r) => r.route.path);
};
