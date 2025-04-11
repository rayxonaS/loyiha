import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { user } = useGlobalContext();
  const { logout, isPending } = useLogout();
  return (
    <header className="bg-base-200 shadow-lg">
      <div className="navbar main-container">
        <div className="navbar max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <Link
            className="flex items-center gap-2 bg-gray-100 p-2 rounded-md"
            to="/"
          >
            <img
              src="https://img.icons8.com/ios/452/restaurant.png"
              alt=""
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-green-700 hidden sm:inline">
              FoodieHub
            </span>
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="flex gap-3 items-center mr-5">
            <div className="avatar"></div>
          </div>
          {!isPending && (
            <button
              onClick={logout}
              className="btn btn-sm btn-secondary btn-outline hidden sm:inline-block"
            >
              Logout
            </button>
          )}
          {isPending && (
            <button
              onClick={logout}
              className="btn btn-sm  btn-secondary loading hidden sm:inline-block"
              disabled
            >
              Loading
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
