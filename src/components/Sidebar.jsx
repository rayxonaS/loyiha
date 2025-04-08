import { useGlobalContext } from "../hooks/useGlobalContext";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

function Sidebar() {
  const { user } = useGlobalContext();
  return (
    <div className="w-64 h-screen p-6 bg-white shadow-lg border-r rounded-r-3xl flex flex-col items-center gap-10">
      <div className="flex flex-col items-center text-center">
        <Avatar user={user} />
        <nav className="flex flex-col w-full gap-4">
          <Link className="w-5 h-5 text-xl" to="/">
            Home
          </Link>
          <Link className="w-5 h-5 text-xl" to="/create">
            Create
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
