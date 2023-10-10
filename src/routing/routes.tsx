import { ReactNode, lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home/home.page"));
const Skills = lazy(() => import("../pages/skills/skills.page"));
const Contact = lazy(() => import("../pages/contact/contact.page"));

const Routes: ReactNode = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/contact" element={<Contact />} />
    <Route
      path="*"
      element={
        <h1>Page not found, please click on the logo to go to the home page</h1>
      }
    />
  </>
);

export default Routes;
