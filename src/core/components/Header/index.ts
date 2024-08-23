import { Header as BaseHeader } from "./Header";
import { ModalHeader } from "./ModalHeader";
import { SearchHeader } from "./SearchHeader";

export const Header = Object.assign(BaseHeader, {
  Modal: ModalHeader,
  Search: SearchHeader,
});
