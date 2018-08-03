const chalk = require('chalk');

exports.redPrint = function (str) {
  console.log(chalk.red(str));
}

exports.bluePrint = function (str) {
  console.log(chalk.blue(str));
}


  // module.exports = function(arg) {//the same result as above,
  //   // however here we can add an argument to the string.
  //   // So the first line of index.js would look like
  //   // const mymodule = require('./mymodules.js')('sampleArgument ----')
  //   const redPrint = function(str) {
  //     console.log(chalk.red(str));
  //   }
  //   const bluePrint = function(str) {
  //     console.log(chalk.blue(str));
  //   }
  //
  //   return {
  //     redPrint: redPrint,
  //     bluePrint: bluePrint,
  //   }
  //
  // }
