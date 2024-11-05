export const getRootFontSize = () => {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  };
  
  export const pxToRem = (px: number) => {
    const rootFontSize = getRootFontSize();
    return px / rootFontSize;
  };
  