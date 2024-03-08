const Card = () => {
	return (
		<>
			<div>
				<div className="card w-96 bg-base-100 shadow-xl ml-[350px] mt-20">
					<figure>
						<img src="src/assets/games/hellblade.jpg" alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							Hellblade: Senua's Sacrifice{" "}
						</h2>
						<p>
							Set in the Viking age, a broken Celtic warrior
							embarks on a haunting vision quest into Viking Hell
							to fight for the soul of her dead lover.{" "}
						</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
				<div className="card w-96 bg-base-100 shadow-xl ml-[350px] mt-20">
					<figure>
						<img src="src/assets/games/hellblade.jpg" alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">
							Hellblade: Senua's Sacrifice{" "}
						</h2>
						<p>
							Set in the Viking age, a broken Celtic warrior
							embarks on a haunting vision quest into Viking Hell
							to fight for the soul of her dead lover.{" "}
						</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export { Card };
