import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <div className="relative w-1/2">
      <ul className="flex h-screen top-0 items-center gap-4 flex-col absolute left-20 bg-black p-10">
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact us</Link>
        <button className="bg-[#FF5200] px-6 py-2 rounded-md">Login</button>
        <button className="px-4 py-2 border border-zinc-200 rounded-md">
          Sign up
        </button>
      </ul>
    </div>
  );
};

export default Hamburger;