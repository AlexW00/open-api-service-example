// module to bundle the exports of all controllers

const glob = require("glob");

// iterate over all modules in the ./src directory
glob.sync(__dirname + "/src/*.js").forEach((file) => {
  // import the module
  const module = require(file);
  // if the module has a default export, use that
  if (module.name) exports[module.name] = module;
  // otherwise, iterate over the exports
  else for (const key of Object.keys(module)) exports[key] = module[key];
});
