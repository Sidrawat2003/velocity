const Topseller = () => {
	return (
		<div className="card w-96 glass">
			<figure>
				<img
					src="src/assets/games/mortal.jpg"
					alt="mortal"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Mortal Combat</h2>
				<p>Buy this month's top seller</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Get now!</button>
				</div>
			</div>
		</div>
	);
};
export {Topseller};