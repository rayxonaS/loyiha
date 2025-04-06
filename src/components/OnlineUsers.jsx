import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");
  return (
    <div>
      {data &&
        data.map((u) => {
          return (
            <h1 key={u.id}>
              {u.displayName}- {u.online ? "online" : "offline"}
            </h1>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
