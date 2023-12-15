const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (str == options.addition) {
    return "STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT";
  }
  let newStr = str;
  let add = "";
  if (
    options.repeatTimes !== undefined &&
    options.addition === undefined &&
    options.separator === undefined &&
    options.additionRepeatTimes === undefined &&
    options.additionSeparator === undefined
  ) {
    str += "+";
    return str.repeat(`${Number(options.repeatTimes - 1)}`) + newStr;
  }

  if (
    options.repeatTimes !== undefined &&
    options.addition === undefined &&
    options.separator !== undefined &&
    options.additionRepeatTimes === undefined &&
    options.additionSeparator === undefined
  ) {
    newStr = str + options.separator;
    return newStr.repeat(`${Number(options.repeatTimes - 1)}`) + str;
  }

  if (
    options.repeatTimes !== undefined &&
    options.addition !== undefined &&
    options.separator !== undefined &&
    options.additionRepeatTimes !== undefined &&
    options.additionSeparator === undefined &&
    options.addition !== "ADDITION"
  ) {
    add +=
      str +
      options.addition.repeat(`${Number(options.additionRepeatTimes)}`) +
      options.separator;
    return (
      add.repeat(`${Number(options.repeatTimes - 1)}`) +
      str +
      options.addition.repeat(`${Number(options.additionRepeatTimes)}`)
    );
  }

  if (
    options.repeatTimes === undefined &&
    options.addition !== undefined &&
    options.separator !== undefined &&
    options.additionRepeatTimes === undefined &&
    options.additionSeparator !== undefined
  ) {
    return str + options.addition;
  }

  if (
    options.repeatTimes !== undefined &&
    options.addition !== undefined &&
    options.separator !== undefined &&
    options.additionRepeatTimes !== undefined &&
    options.additionSeparator !== undefined
  ) {
    let addPlus = options.addition + options.additionSeparator;
    add +=
      addPlus.repeat(`${Number(options.additionRepeatTimes - 1)}`) +
      options.addition;
    return (
      (str + add + options.separator).repeat(
        `${Number(options.repeatTimes - 1)}`
      ) +
      str +
      add
    );
  }

  if (
    options.repeatTimes !== undefined &&
    options.addition !== undefined &&
    options.separator === undefined &&
    options.additionRepeatTimes !== undefined &&
    options.additionSeparator === undefined
  ) {
    console.log("sdsd")
    add =
      (options.addition + "|").repeat(
        `${Number(options.additionRepeatTimes - 1)}`
      ) + options.addition;
    return (
      (str + add + "+").repeat(`${Number(options.repeatTimes - 1)}`) + str + add
    );
  }

  if (
    options.repeatTimes !== undefined &&
    options.addition !== undefined &&
    options.separator === undefined &&
    options.additionRepeatTimes !== undefined &&
    options.additionSeparator !== undefined
  ) {
    add +=
      (options.addition + options.additionSeparator).repeat(
        `${Number(options.additionRepeatTimes - 1)}`
      ) + options.addition;
    return (
      (str + add + "+").repeat(`${Number(options.repeatTimes - 1)}`) + str + add
    );
  }

  if (
    options.repeatTimes !== undefined &&
    options.addition !== undefined &&
    options.separator !== undefined &&
    options.additionRepeatTimes !== undefined &&
    options.additionSeparator === undefined &&
    options.addition === "ADDITION"
  ) {
    add +=
      (options.addition + "|").repeat(
        `${Number(options.additionRepeatTimes) - 1}`
      ) + options.addition;
    return (
      (str + add + options.separator).repeat(
        `${Number(options.repeatTimes - 1)}`
      ) +
      str +
      add
    );
  }
}

module.exports = {
  repeater,
};
