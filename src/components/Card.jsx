const Card = () => {
	return (
		<>
			<div className="bg-[#B0BBBF]">
				<div className="flex items-center">
					<div className="card w-96 bg-base-100 shadow-xl ml-[300px] mt-20">
						<figure>
							<img
								src="src/assets/games/senua's.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								Hellblade: Senua's Sacrifice{" "}
							</h2>
							<p>
								Set in the Viking age, a broken Celtic warrior
								embarks on a haunting vision quest into Viking
								Hell to fight for the soul of her dead lover.{" "}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
					<div className="card w-96 bg-base-100 shadow-xl ml-[50px] mt-20">
						<figure>
							<img
								src="src/assets/games/theforest.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">The Forest </h2>
							<p>
								The Forest blends exploration, discovery, and
								cannibalism in a story-rich survival horror
								sandbox. Survive a plane crash and fight off
								mutants in the game.{" "}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
					<div className="card w-96 bg-base-100 shadow-xl ml-[50px] mt-20">
						<figure>
							<img src="src/assets/games/creed.png" alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								Assassin's Creed Odyssey{" "}
							</h2>
							<p>
								Write your own epic odyssey and become a
								legendary Spartan hero in Assassin’s Creed
								Odyssey, an inspiring adventure where you must
								forge your destiny.{" "}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center ">
					<div className="card w-96 bg-base-100 shadow-xl ml-[300px] mt-20">
						<figure>
							<img src="src/assets/games/far.jpg" alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Far Cry 5 </h2>
							<p>
								Montana, land of the free and the brave, but
								also home to a fanatical doomsday cult—known as
								The Project at Eden’s Gate that is threatening
								the community's freedom. .{" "}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
					<div className="card w-96 bg-base-100 shadow-xl ml-[50px] mt-20">
						<figure>
							<img src="src/assets/games/elden.jpg" alt="Shoes" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Elden Rings </h2>
							<p>
								Rise and be guided by grace to brandish the
								power of the Elden Ring and become an Elden Lord
								in the Lands Between. A war that meant
								abandonment by the Greater Will.{" "}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
					<div className="card w-96 bg-base-100 shadow-xl ml-[50px] mt-20">
						<figure>
							<img
								src="src/assets/games/tekken8.jpg"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Tekken 8 </h2>
							<p>
								TEKKEN 8 continues the tragic saga of the
								Mishima bloodline and its world-shaking
								father-and-son grudge matches. Showcase every
								moment of impact and super moves.{" "}
							</p>
							<div className="card-actions justify-end">
								<button className="btn btn-primary">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export { Card };
