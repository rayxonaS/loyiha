import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useGlobalContext();
  const { logout, isPending } = useLogout();
  return (
    <header className="bg-base-200 shadow-lg">
      <div className="navbar main-container">
        <div className="navbar-start flex items-center gap-2">
          <Link
            className=" bg-gray-100 flex items-center gap-2 p-2 rounded-md"
            to="/"
          >
            <img
              src="https://img.icons8.com/ios/452/restaurant.png"
              alt=""
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-green-700">FoodieHub</span>
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center mr-5">
            <div className="avatar"></div>
          </div>
          {!isPending && (
            <button onClick={logout} className="btn btn-secondary btn-outline">
              Logout
            </button>
          )}
          {isPending && (
            <button onClick={logout} className="btn btn-secondary" disabled>
              Loading
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
