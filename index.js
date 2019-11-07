const WRONG_MESSAGE = "";
// to
const pInt = num => parseInt(num, 16);
const getOctal = num => {
  let count = 15;
  while (count > 0) {
    let res = (num - count) / 16;
    if (!(res + "").includes(".")) {
      return `${res.toString(16)}${count.toString(16)}`;
    }
    count--;
  }
  return `ff`;
};
// HexToRGB
const convertHexToRGB = hex => {
  let str = hex.replace("#", "");
  if (![3, 6].includes(str.length)) return WRONG_MESSAGE;
  if (str.length === 3) {
    str = `${str[0]}${str[0]}${str[1]}${str[1]}${str[2]}${str[2]}`;
  }
  const R = pInt(str[1]) + pInt(str[0]) * 16;
  const G = pInt(str[3]) + pInt(str[2]) * 16;
  const B = pInt(str[5]) + pInt(str[4]) * 16;
  return `rgb(${R},${G},${B})`;
};
// RGBToHex
const convertRGBToHex = rgb => {
  let arr = [];
  try {
    arr = rgb
      .replace("rgb(", "")
      .replace(")", "")
      .split(",");
  } catch (err) {
    return WRONG_MESSAGE;
  }
  if (arr.length < 3) {
    return WRONG_MESSAGE;
  }
  const R = getOctal(arr[0]);
  const G = getOctal(arr[1]);
  const B = getOctal(arr[2]);
  return `#${R}${G}${B}`;
};

export { convertHexToRGB, convertRGBToHex };
