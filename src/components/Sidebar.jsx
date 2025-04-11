import { useGlobalContext } from "../hooks/useGlobalContext";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function Sidebar() {
  const { user } = useGlobalContext();
  return (
    <div
      className="bg-white shadow-md border-r md:border-t-0 md:rounded-r-3xl 
                 md:w-64 md:h-screen w-full fixed bottom-0 md:static 
                 flex md:flex-col items-center justify-around md:justify-start 
                 p-4 md:gap-10 gap-2 z-40"
    >
      <div className="hidden md:flex flex-col items-center text-center">
        <Avatar user={user} />
        <nav className="flex md:flex-col items-center justify-between w-full md:mt-6 text-sm md:text-lg font-medium text-gray-700">
          <Link
            className="flex flex-col items-center gap-1 hover:text-purple-600"
            to="/"
          >
            🏠 Home
          </Link>
          <Link
            className="flex flex-col items-center gap-1 hover:text-purple-600"
            to="/create"
          >
            ➕ Create
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
