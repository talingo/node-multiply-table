const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: 'Its the table base number'
    },
    l: {
      alias: "list",
      type: "boolean",
      default: false,
      describe: 'Shows table on console'
    },
    li:{
        alias:"limit",
        type:"number",
        describe: "Sets the last multiple of the table",
        default: 10
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base has to be a number";
    }
    return true;
  }).argv;

  module.exports = argv;