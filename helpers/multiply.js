const { writeFileSync } = require("fs");
const colors = require("colors")

const createFile = async (base = 5, list = false, limit = 10) => {
  try {
    let salida, consola = "";

    for (let i = 1; i <= limit; i++) {
      salida  += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.random} ${i} ${"=".random} ${base * i}\n`;
    }

    if (list) {
      console.log("=====================".random);
      console.log(`   Table of: `.green, colors.blue(base));
      console.log("=====================".random);
      console.log(consola);
    }


    writeFileSync(`./tables/table-${base}.txt`, salida);

    return `table-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
