

const Banner = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4">


            <div className="max-h-[500px] relative">

                <div className="absolute w-full top-64 left-5 flex-col justify-center  h-full text-gray-200 max-h[500px] ">
                 <h1 className="sm:text-3xl md:text-4xl lg:text-6xl text-5xl font-semibold">The <span className="text-orange-600">Best</span></h1> 
                <h1 className=" sm:text-3xl md:text-4xl lg:text-6xl text-6xl font-semibold">Foods <span className="text-orange-600">Delivered</span></h1>
                </div>


            <div className="text-center">
            <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

            </div>
            
        </div>
    );
};

export default Banner;