// ====================================================== //
// ======================= OpenApiService =============== //
// ====================================================== //

/* 
Usage: 
const apiControllers = require("./api/controllers"),
  apiDocs = "api/definition/openapi.yaml";
const service = new OpenApiService(apiDocs, apiControllers, 3000);
service.start(); 
*/

// ~~~~~~~~~~~~~ Dependencies ~~~~~~~~~~~~ //

// NPM Modules
const { connector } = require("swagger-routes-express"),
  SwaggerParser = require("swagger-parser"),
  express = require("express");

class OpenApiService {
  constructor(_openApiDoc, _apiControllers, _port) {
    this.apiControllers = _apiControllers; // controller functions
    this.openApiDoc = _openApiDoc; // file path
    this.port = _port;
  }

  async start() {
    this.app = await this._makeExpressApp(this.openApiDoc, this.apiControllers);
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
      console.log(`Available routes: ` + this.getAllRoutePaths());
    });
    return this;
  }

  getAllRoutePaths = () => {
    return this.app._router.stack
      .filter((r) => r.route)
      .map((r) => r.route.path);
  };

  _makeExpressApp = async (_apiDocs, _apiControllers) => {
    const app = express(),
      parsedApiDocs = await this._parseApiDocs(_apiDocs),
      connect = connector(_apiControllers, parsedApiDocs);
    connect(app);
    return app;
  };

  _parseApiDocs = async (_apiDocs) => {
    return await SwaggerParser.validate(_apiDocs);
  };
}
