import { Spaceship } from "./exports";
import * as lodash from "lodash";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: "X-Wing",
  pilot: "Luke",
  speed: 50,
  weapons: 4,
};

lodash.camelCase