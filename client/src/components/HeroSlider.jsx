const HeroSlider = () => {
    return (
        <div className="carousel m-2  w-full max-h-screen- ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="src\assets\games\cyberpunk1.jpg"
                  
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="src\assets\games\GTA.jpg"
                    
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="src\assets\games\RDR2.png"
                    
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="src\assets\games\witcher.jpg"
                   
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export { HeroSlider };
