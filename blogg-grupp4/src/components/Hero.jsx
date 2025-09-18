import { useState } from "react";
import "../hero.css";
import { HOME_PAGE, ESTELLE_PAGE, SIMON_PAGE, ANTON_PAGE } from "../App"


export function Hero({changePage}) {

const [showContent, setShowContent] = useState(false);
	
const handleClick = () => {setShowContent(!showContent);}

	return (
		<>
			<section className="hero">
				<div className="hero-content">
					<h1>Welcome to the blooogogogogogo</h1>
					<button className="hero-button" onClick={handleClick}>
						{showContent} click me
					</button>

					{showContent && (
						<div>
								<button onClick={() => changePage(ANTON_PAGE)}>Anton</button>
								<button onClick={() => changePage(ESTELLE_PAGE)}>Estelle</button>
								<button onClick={() => changePage(SIMON_PAGE)}>Simon</button>	
						</div>)}
					
				</div>
			</section>
		</>
	);
}
