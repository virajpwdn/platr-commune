const Hamburger = () => {
  return (
    <div>
      <ul className="flex items-center gap-4">
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
