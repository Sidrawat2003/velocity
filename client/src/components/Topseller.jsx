const Topseller = () => {
    return (
        <div>
            {/* <div className="card w-96 glass m-4 flex justify-center items-center w-80vh">
                <figure>
                    <img src="src/assets/games/mortal.jpg" alt="mortal" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-3xl">Mortal Combat</h2>
                    <p className="text-xl">Buy this month's top seller</p>
                    <div className="card-actions justify-end ">
                        <button className="btn btn-primary">Get now!</button>
                    </div>
                </div>
            </div> */}
            <div>
				<div className="bg-[#B0BBBF] m-4 flex justify-center rounded-md">
                <div className="card w-96 bg-base-100 shadow-xl m-4">
                    <figure className="px-10 pt-10">
                        <img
                            src="src/assets/games/mortal.jpg"
                            alt="mortal"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl">Mortal Combat</h2>
                        <p className="text-xl">Buy this month's top seller.</p>
                        <div className="card-actions mt-5">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
				</div>

            </div>
        </div>
    );
};
export { Topseller };
