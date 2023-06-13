import plus from "../assets/icon/plus.png";
import minus from "../assets/icon/minus.png";
import multiply from "../assets/icon/multiply.png";
import division from "../assets/icon/divide.png";
import { ROUTERS } from "../routing/routers";

export const BUTTON_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
export const DURATION_VALUES = [6, 9, 12];
export const ENTER_LABEL = "ENTER";
export const START_LABEL = "START";
export const GO_TO_GAME_LABEL = "GO TO GAME";
export const LOGIN_LABEL = "LOGIN";

export const navbarItems = [
  { linkText: "home", link: ROUTERS.index },
  { linkText: "login", link: ROUTERS.auth },
  { linkText: "settings", link: ROUTERS.settings },
  { linkText: "game", link: ROUTERS.game },
];

export const homeList = [
  { text: "Change name", link: ROUTERS.auth },
  { text: "Go to settings", link: ROUTERS.settings },
  { text: "Go to game", link: ROUTERS.game },
];

export interface Operation {
  symbol: string;
  nameOperation: string;
  pic: string;
}
export const operations: Array<Operation> = [
  { symbol: "+", nameOperation: "addition", pic: plus },
  { symbol: "-", nameOperation: "subtraction", pic: minus },
  { symbol: "x", nameOperation: "multiply", pic: multiply },
  { symbol: ":", nameOperation: "division", pic: division },
];
