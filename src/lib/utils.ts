type ClassNamesInput =
  | string
  | boolean
  | undefined
  | null
  | { [key: string]: boolean }
  | (string | null | undefined | boolean)[];

const cn = (...args: ClassNamesInput[]): string => {
  return args
    .flat()
    .filter(Boolean)
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (typeof item === "object" && item !== null) {
        return Object.keys(item)
          .filter((key) => item[key])
          .join(" ");
      }

      return "";
    })
    .filter(Boolean)
    .join(" ");
};

export default cn;
