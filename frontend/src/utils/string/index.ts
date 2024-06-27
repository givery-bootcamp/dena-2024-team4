export const validtor = {
  alphanumeric: (str: string) => {
    return /^[a-zA-Z0-9]+$/.test(str);
  },
  ascii: (str: string) => {
    return /^[\x20-\x7E]+$/.test(str);
  },
};
