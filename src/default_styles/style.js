// colors for coral
const darkGray = '#0c1011';
const gray = '#b7b7b9';
const lightGray = '#EDEDEE';
const coral = '#ff524e';

// colors for aqua
const aqua = '#0f8d99';
const blueGray = '#96a9a3';
const lightBlue = '#afd9dd';
const black = '#000000';

// common elements
const white = '#ffffff';
const padding = '1.5rem 3.5rem';

export const DEFAULT_STYLE = {
  primary: {
    color: white,
    background: gray,
  },
  secondary: {
    color: white,
    background: coral,
  },
  tertiary: {
    color: darkGray,
    background: lightGray,
    padding,
  },
};

export const AQUA_STYLE = {
  primary: {
    color: white,
    background: aqua,
  },
  secondary: {
    color: white,
    background: blueGray,
  },
  tertiary: {
    color: black,
    background: lightBlue,
    padding,
  },
};
