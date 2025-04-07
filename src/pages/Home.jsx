import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  return (
    <div>
      {data &&
        data.map((r) => {
          return (
            <div>
              <h2 className="text-center mb-10 mt-5 text-4xl" key={r.id}>
                List of users:
              </h2>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
