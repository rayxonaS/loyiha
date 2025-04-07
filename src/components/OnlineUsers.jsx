import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div>
      {data &&
        data.map((u) => {
          return (
            <div className="main-container ">
              <div className="flex gap-10" key={u.id}>
                <img
                  className="w-24 rounded-4xl border-b-blue-500 border-8 mt-2"
                  src={u.photoURL}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl mt-5">{u.displayName}</h1>
                  <p className="text-xl text-green-800 font-bold">
                    {u.online ? "online" : "offline"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
