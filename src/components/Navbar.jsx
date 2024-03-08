const Navbar = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>Category</a>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">VELOCITY</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 z-[1]">
					<li>
						<a>Home</a>
					</li>
					<li>
						<details>
							<summary>Category</summary>
							<ul className="p-2">
								<li>
									<a>Action</a>
								</li>
								<li>
									<a>Arcade</a>
								</li>
								<li>
									<a>Adventure</a>
								</li>
								<li>
									<a>Roleplaying</a>
								</li>
								<li>
									<a>RPG</a>
								</li>
								<li>
									<a>Racing</a>
								</li>
								<li>
									<a>Strategy</a>
								</li>
								<li>
									<a>TPS</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Library</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Login</a>
			</div>
		</div>
	);
};
export { Navbar };
