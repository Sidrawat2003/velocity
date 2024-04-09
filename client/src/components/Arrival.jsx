const Arrival = () => {
    return (
        <>
            <div
                className="card lg:card-side bg-base-100 shadow-xl w-1/2 mt-20 ml-[460px] h-96 border-2 border-pink-500">
                <figure>
                    <img className="h-96"
                         src="src/assets/games/palworld.jpg"
                         alt="Album"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">New Arrival!</h2>
                    <p>Get early access of this game.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Get Access</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export {Arrival};
