import CustomRouter from "../libs/react-router/router.config";

export default function App() {
  // In this part of the component the idea is to handle things
  // that should be initializated at the beggining, such as:
  // - Authentication
  // - Theme
  // - Language
  // - etc ...

  /* App level styles */
  return (
    <div className="container flex flex-col mx-auto max-w-screen-xl p-6 min-h-screen">
      <CustomRouter />
    </div>
  );
}
