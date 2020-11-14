export const required = (value) => {
  if (!value.replace(/\s/g, "")) {
    return true;
  }
};
