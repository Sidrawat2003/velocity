import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-between items-center p-4">
            <div className="navbar-start">
                <Link className="text-xl" to={"/"}>
                    VELOCITY
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex ">
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
            <div className="flex items-center">
                <Link to={"/login"}>
                    <button className="mr-4">Login</button>
                </Link>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                        Theme
                        <svg
                            width="12px"
                            height="12px"
                            className="h-2 w-2 fill-current opacity-60 inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048"
                        >
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
                    >
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Default"
                                value="default"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Retro"
                                value="retro"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Cyberpunk"
                                value="cyberpunk"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Valentine"
                                value="valentine"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Aqua"
                                value="aqua"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Garden"
                                value="garden"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Coffee"
                                value="coffee"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Winter"
                                value="winter"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label="Sunset"
                                value="sunset"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export { Navbar };
