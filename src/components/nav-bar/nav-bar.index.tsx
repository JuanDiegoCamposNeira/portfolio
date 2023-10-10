import Logo from "../../assets/logo.svg?react";
import Button from "../buttons/button.index";

export default function NavBar() {
  return (
    <header className="absolute flex items-center justify-between">
      <Logo width={70} height={70}/>

      <nav className="w-56 flex items-center justify-between">
        <Button color="primary">Skills</Button>
        <Button color="primary">Contact</Button>
      </nav>
    </header>
  );
}
