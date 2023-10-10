import { ButtonColorDefinitions } from "./button.constants";
import ButtonProps from "./button.types";

export default function Button({ children, color }: ButtonProps) {
  return <button className={ButtonColorDefinitions[color]}>{children}</button>;
}
