import { Link, useNavigate } from "react-router";
import Hamburger from "./Hamburger";
import { UserContext } from "../../context/userContext.ts";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../Store/cartSlice.ts";

interface ContextProps {
  userName: string;
  password: string;
  // setUser: Dispatch<SetStateAction<string>>
}

const Navbar = () => {
  const { userName, setDemo }: ContextProps = useContext(UserContext);
  setDemo("Adam");

  // const navigate = useNavigate();
  // const store = useSelector((store) => store.cart.items);
  // const dispatch = useDispatch();

  const addToCartHandler = () => {
      
  };

  return (
    <div className="flex justify-between bg-black p-10 text-white w-full">
      <div className="image-container h-10">
        <Link to={"/"}>
          <img
            className="h-10 object-cover"
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="hidden max-sm:block">
        <Hamburger />
      </div>
      <div className="flex items-center max-sm:hidden">
        <ul className="flex items-center gap-4">
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact us</Link>
          <button className="bg-[#FF5200] px-6 py-2 rounded-md">Login</button>
          <button
            onClick={addToCartHandler}
            className="px-4 py-2 border border-zinc-200 rounded-md"
          >
            cart ({store?.length})
          </button>
          <h4>{userName}</h4>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
