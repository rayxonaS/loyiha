import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div className="w-64 bg-white shadow-md p-5 rounded-r-2xl hidden md:block">
      <h3 className="text-lg font-bold text-gray-800 mb-4">🟢 Online Users</h3>
      <div className="space-y-4">
        {data &&
          data.map((u) => {
            return (
              <div className="flex items-center gap-3">
                <div key={u.id}>
                  <img
                    className="w-10 h-10 rounded-full border border-indigo-500 "
                    src={u.photoURL}
                    alt={u.displayName}
                  />
                  <div>
                    <h1 className="text-2xl mb-2">{u.displayName}</h1>
                    <p className="text-sm font-semibold ">
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
