import LoadingScreen from "../LoadingScreen";
import createRouterFactory from "../Router/createRouterFactory";
import withRelay from "../Router/withRelay";
import HomeRoute from "./Home/route";
import FilmRoute from "./Film/route";

export const routes = [HomeRoute, FilmRoute];

const router = withRelay(createRouterFactory(true), routes, LoadingScreen);

export default router;
