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

/**
 * It doesn't matter in which order we export (A,B or B,A), only the order of the import causes the error
 */
export { A, B };
