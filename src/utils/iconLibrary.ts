import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faCode, faPlus } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faCode);

export { faCode, faPlus };
