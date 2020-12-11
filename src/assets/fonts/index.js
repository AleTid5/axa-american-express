import BentonSansBoldTTF from "./BentonSans-Bold.ttf";
import BentonSansBookTTF from "./BentonSans-Book.ttf";
import BentonSansLightTTF from "./BentonSans-Light.ttf";
import BentonSansMediumTTF from "./BentonSans-Medium.ttf";

export const BentonSansBold = {
  fontFamily: "BentonSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    local('BentonSans'),
    local('BentonSans-Bold'),
    url(${BentonSansBoldTTF}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const BentonSansBook = {
  fontFamily: "BentonSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('BentonSans'),
    local('BentonSans-Book'),
    url(${BentonSansBookTTF}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const BentonSansLight = {
  fontFamily: "BentonSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 200,
  src: `
    local('BentonSans'),
    local('BentonSans-Light'),
    url(${BentonSansLightTTF}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const BentonSansMedium = {
  fontFamily: "BentonSans",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('BentonSans'),
    local('BentonSans-Medium'),
    url(${BentonSansMediumTTF}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
