// colors for coral
function colarColors() {
  const darkGray = '#0c1011';
  const gray = '#939395';
  const lightGray = '#EDEDEE';
  const coral = '#ff524e';
  const coralContrast = '#c33e3c';
  return {
    gray, coral, coralContrast, darkGray, lightGray,
  };
}

const {
  gray, coral, coralContrast, darkGray, lightGray,
} = colarColors();

// colors for aqua
function aquaColors() {
  const aqua = '#0f8d99';
  const blueGray = '#96a9a3';
  const lightBlue = '#afd9dd';
  const black = '#000000';
  const blueGrayContrast = '#688378';
  return {
    aqua, blueGray, lightBlue, black, blueGrayContrast,
  };
}

const {
  aqua, blueGray, lightBlue, black, blueGrayContrast,
} = aquaColors();

// common elements
const white = '#ffffff';
const padding = '1.5rem 3.5rem';

export const CORAL_STYLE = {
  primary: {
    color: white,
    background: gray,
  },
  secondary: {
    color: white,
    background: coral,
    colorContrast: coral,
    backgroundContrast: coralContrast,
    name: 'default',
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
    colorContrast: blueGrayContrast,
    backgroundContrast: blueGrayContrast,
    name: 'aqua',
  },
  tertiary: {
    color: black,
    background: lightBlue,
    padding,
  },
};
