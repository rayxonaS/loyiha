import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data } = useCollection("recepies");

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data &&
        data.map((r) => {
          return (
            <div
              key={r.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {r.title}
                </h2>
                {r.description && (
                  <p className="text-gray-600 text-sm mb-4">{r.description}</p>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
