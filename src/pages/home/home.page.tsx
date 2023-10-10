import NavBar from "../../components/nav-bar/nav-bar.index";
import SmilingFace from "../../assets/smilingFace.svg?react";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="h-screen border flex justify-center items-center grow">
        <div className="grow tracking-wider">
          <div className="text-7xl font-extralight">
            <h1>Hello!</h1>
            <h1>My name is Juan </h1>
            <h1>I'm a Software Engineer</h1>
          </div>
          <div className="text-3xl text-gray-400 font-extralight pt-10">
            <h2>Let's create something awesome together</h2>
          </div>
        </div>
        <SmilingFace width={550} height={550} />
      </section>
      <section className="h-screen border"></section>
    </>
  );
}
