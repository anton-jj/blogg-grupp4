import { HOME_PAGE, ESTELLE_PAGE, SIMON_PAGE, ANTON_PAGE } from "../App"
import "../styles/nav.css";

export function Navbar({ changePage }) {
  return (

    <nav className="nav-container">
     
        <button onClick={() => changePage(HOME_PAGE)}>Home</button>
        <button onClick={() => changePage(ANTON_PAGE)}>Anton</button>
        <button onClick={() => changePage(ESTELLE_PAGE)}>Estelle</button>
        <button onClick={() => changePage(SIMON_PAGE)}>Simon</button>
    
    </nav>

  );
}