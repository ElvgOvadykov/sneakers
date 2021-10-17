/**
 *
 * Asynchronously loads the component for TogglePlus
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
