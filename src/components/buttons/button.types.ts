type ButtonProps = Props & {
  color: "primary" | "secondary";
};

enum Color {
  primary = "primary",
  secondary = "secondary",
}

type ColorDefinition = {
  [k in keyof typeof Color]: string;
};

export default ButtonProps;

export type { ColorDefinition };
