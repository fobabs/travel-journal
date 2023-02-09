import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faEarthAmericas} className="header-icon" />
      <h2>My Travel Journal</h2>
    </header>
  );
}
