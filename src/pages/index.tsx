import loadable from "@loadable/component";

export const ErrorPage = loadable(() => import("../pages/errorPage/ErrorPage"));
export const HomePage = loadable(() => import("../pages/homePage/HomePage"));
export const AuthPage = loadable(() => import("../pages/authPage/AuthPage"));
export const SettingsPage = loadable(
  () => import("../pages/settingsPage/SettingsPage")
);
export const GamePage = loadable(() => import("../pages/gamePage/GamePage"));
export const Layout = loadable(() => import("../layout/Layout"));
