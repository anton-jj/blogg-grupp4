import { HOME_PAGE, ESTELLE_PAGE, SIMON_PAGE, ANTON_PAGE } from "../App"

export function Navbar({ changePage }) {
return (
      
        <nav>
          <ul>
            <button onClick={() => changePage(HOME_PAGE)}>Home</button>
            <button onClick={() => changePage(ANTON_PAGE)}>Anton</button>
            <button onClick={() => changePage(ESTELLE_PAGE)}>Estelle</button>
            <button onClick={() => changePage(SIMON_PAGE)}>Simon</button>
          </ul>
          </nav> 
      
);
}