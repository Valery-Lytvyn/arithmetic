import { createHashRouter } from "react-router-dom";
import { ROUTERS } from "./routers";
import {
  AuthPage,
  ErrorPage,
  GamePage,
  HomePage,
  Layout,
  SettingsPage,
} from "../pages/index";

export const router = createHashRouter([
  {
    path: ROUTERS.index,
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTERS.auth,
        element: <AuthPage />,
      },
      {
        path: ROUTERS.settings,
        element: <SettingsPage />,
      },
      {
        path: ROUTERS.game,
        element: <GamePage />,
      },
    ],
  },
]);
