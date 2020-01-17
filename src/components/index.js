/**
 * This order causes no errors in `yarn start` but causes an error in the story for component A
 */
import { A } from "./A";
import { B } from "./B";
/**
 * This order causes no errors anywhere
import { B } from "./B";
import { A } from "./A";
 */

export { A, B };
