import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");
  return (
    <div>
      {data &&
        data.map((r) => {
          return (
            <div>
              <h2 className="text-center text-4xl font-bold mb-10">
                List of Recipes
              </h2>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
