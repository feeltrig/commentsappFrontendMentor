export const getDatefn = () => {
  const month = new Date().toUTCString().split(" ");
  month.splice(0, 1);
  month.splice(-2);
  const final = month.join(" ");
  return final;
};
