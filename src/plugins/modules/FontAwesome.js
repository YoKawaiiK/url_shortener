import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowAltCircleRight,
  faTrash,
  faPen,
  faWindowClose,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(
  faGithub,
  faArrowAltCircleRight,
  faTrash,
  faPen,
  faWindowClose,
  faShare
);

export default FontAwesomeIcon;
