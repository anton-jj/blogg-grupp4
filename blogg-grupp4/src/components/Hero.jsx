import "../styles/hero.css";
export function Hero() {
	const handleClick = () => {
		alert("hello world");
	};

	return (
		<>
			<section className="hero">
				<div className="hero-content">
					<h1>Welcome to the blooogogogogogo</h1>
					<button className="hero-button" onClick={handleClick}>
						Explore bloggs
					</button>
				</div>
			</section>
		</>
	);
}
