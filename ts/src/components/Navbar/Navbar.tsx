const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="image-container h-10">
        <img
          className="h-10 object-cover"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-4">
          <li>Swiggy Corporate</li>
          <li>Partner with us</li>
          <button className="bg-[#FF5200] px-6 py-2 rounded-md">Login</button>
          <button className="px-4 py-2 border border-zinc-200 rounded-md">Sign up</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
