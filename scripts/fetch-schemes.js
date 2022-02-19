const glob = require("glob"),
  fs = require("fs");
const mockSchemeNames = () => {
  return glob.sync("schemas/*.yaml").map((file) => {
    const filename = file.split("/").pop();
    return { content: fs.readFileSync(file, "utf8"), filename };
  });
};

const schemas = mockSchemeNames(); // import scheme modules here

const schemeDir = "api/definition/schemas/";

const saveSchemas = (_schemas, _schemeDir) => {
  _schemas.forEach((scheme) => {
    saveScheme(scheme, _schemeDir);
  });
};

const saveScheme = (_scheme, _schemeDir) => {
  const filename = _scheme.filename,
    content = _scheme.content;
  fs.writeFileSync(_schemeDir + filename, content);
};

saveSchemas(schemas, schemeDir);
