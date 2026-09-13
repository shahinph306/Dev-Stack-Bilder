import Logo from "../assets/Background+Shadow.png"

const Nav = () => {
    return (
        <div className=" bg-red-100 mt-2 ">
            <nav className="flex justify-between container mx-auto pt-2 pb-2 font-bold items-center">
      <div className="left flex gap-2 ">
          <img src={Logo} alt="" /><h1 className="text-2xl">Dev <span className="text-red-500">Stack</span></h1>
      </div>
      <div className="centre ">
            <ul className="flex gap-6 cursor-pointer text-gray-600">
              <li className="text-red-500">Home</li>
              <li>Technologies</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
      </div>
      <div className="right flex gap-6 text-gray-600">
          <button className="cursor-pointer">Sign In</button>
          <button className="bg-red-500 p-2 rounded-lg cursor-pointer">Sign Up</button>
      </div>
    </nav>
        </div>
    );
};

export default Nav;