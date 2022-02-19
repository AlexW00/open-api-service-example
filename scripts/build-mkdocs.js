#! /usr/bin/env node
const widdershins = require("widdershins"),
  SwaggerParser = require("swagger-parser"),
  YAML = require("yaml"),
  fs = require("fs");

const apiDocs = "api/docs/openapi.yaml",
  parsedApiDocs = SwaggerParser.validate(apiDocs);
options = {
  language_tabs: [{ javascript: "JavaScript:request" }],
  codeSamples: true,
  discovery: true,
  headings: 3,
};

SwaggerParser.validate(apiDocs).then((parsedApiDocs) => {
  convertToMarkdown(parsedApiDocs, options).then((markdown) => {
    fs.writeFileSync("docs/api.md", markdown);
  });
});

function parseApiDocs(_apiDocs) {
  return SwaggerParser.validate(_apiDocs);
}

async function convertToMarkdown(_parsedApiDoc, _options) {
  return await widdershins.convert(_parsedApiDoc, _options);
}

function parseYaml(yamlFilePath) {
  return YAML.parse(fs.readFileSync(yamlFilePath, "utf8"));
}
