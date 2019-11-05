export const setFooterDisplayToTrue = () => {
  return {
    type: "SET-DISPLAY-TRUE"
  };
};

export const setFooterDisplayToFalse = () => {
  return {
    type: "SET-DISPLAY-FALSE"
  };
};

export const changeFooterClass = data => {
  return {
    data,
    type: "CHANGE-FOOTER-CLASS"
  };
};
