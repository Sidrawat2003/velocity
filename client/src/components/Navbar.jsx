import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<div className="navbar bg-base-100 ">
			<div className="navbar-start">
				{/* <div className="dropdown">
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
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <a>Category</a>
                        </li>
                    </ul>
                </div> */}
				<Link className="text-xl p-4" to={"/"}>
					VELOCITY
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 z-[1]">
					<li>
						<Link to={"/"}>Home</Link>
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
			<Link to={"/login"}>
				<button>Login</button>
			</Link>
			<div className="dropdown dropdown-hover">
				<div tabIndex={0} role="button" className="btn m-1">
					Themes
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<button>Sakura</button>
					</li>
					<li>
						<a>Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export { Navbar };
