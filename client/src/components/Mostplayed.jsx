const Mostplayed = () => {
	return (
		<div className="card lg:card-side bg-base-100 shadow-xl">
			<figure>
				<img
					src="src/assets/games/cs.jpeg"
					className="w-1/2"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">Most played game!</h2>
				<p>Add Counter Strike Global Offensive 2.</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Listen</button>
				</div>
			</div>
		</div>
	);
};
export {Mostplayed};