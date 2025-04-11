import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div className="bg-white shadow-md p-4 md:p-5 rounded-t-2xl md:rounded-r-2xl fixed md:static bottom-0 left-0 right-0 md:w-64 md:h-auto z-10">
      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">
        🟢 Online Users
      </h3>
      <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-3">
        {data &&
          data.map((u) => {
            return (
              <div className="flex items-center gap-3">
                <div
                  key={u.id}
                  className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 min-w-[60px]"
                >
                  <img
                    className="w-10 h-10 rounded-full border border-indigo-500 "
                    src={u.photoURL}
                    alt={u.displayName}
                  />
                  <div className="text-center md:text-left">
                    <h1 className="text-sm font-semibold text-gray-800 truncate w-[60px] md:w-auto">
                      {u.displayName}
                    </h1>
                    <p className="text-xs text-gray-500 ">
                      {u.online ? "online" : "offline"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OnlineUsers;
