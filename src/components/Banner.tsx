import Image from "../assets/Container.png"

const Banner = () => {
    return (
        <div >
            <div className="banner flex justify-between container mx-auto pt-20">
                  <div className="banner-left  w-200">
                      <h1 className="text-6xl">Build Your Ideal</h1>
                 <span className="text-6xl bg-linear-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>

                    <p className="mt-6 text-gray-500">Explore frontend, backend, database, and tooling options, <br /> compare them side by side and put together the stack that fits your <br /> next project.</p>

                    <div className="btn flex gap-4 mt-10 ">
                      <button className="bg-pink-500 p-2 rounded-2xl cursor-pointer">Explore Technologies</button>
                      <button className="border-2 p-2 rounded-2xl cursor-pointer">Learn More</button>
                    </div>
                  </div>
                  <div className="banner-right">
                          <img src={Image} alt="" />
                  </div>
            </div>
        </div>
    );
};

export default Banner;