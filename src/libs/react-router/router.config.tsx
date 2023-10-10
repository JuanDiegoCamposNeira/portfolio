import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Routes from "../../routing/routes";

const _router = createBrowserRouter(createRoutesFromElements(Routes));

export default function CustomRouter() {
  return <RouterProvider router={_router} />;
}
