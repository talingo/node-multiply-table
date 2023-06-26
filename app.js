const { createFile } = require("./helpers/multiply");
const argv  = require("./config/yargs");
require("colors");

console.clear();

console.log(argv);

createFile(argv.b, argv.l, argv.li)
  .then((fileName) => console.log(fileName.rainbow, "created successfully"))
  .catch((err) => console.log(err, "failed to create file"));
