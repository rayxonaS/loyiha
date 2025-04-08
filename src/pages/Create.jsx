import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";

function Create() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <form className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">
          🍳 New Recipe
        </h2>
        <FormInput
          name="title"
          label="title"
          type="text"
          className="w-full mb-3 p-3 border rounded-xl"
        />
        <FormInput
          name="cookingTime"
          label="Cooking Time"
          type="numbers"
          className="w-full mb-3 p-3 border rounded-xl"
        />
        <FormInput
          name="ingredients"
          label="Ingredients"
          type="text"
          className="w-full mb-3 p-3 border rounded-xl"
        />
        <FormTextArea
          label="Description"
          className="w-full mb-4 p-3 border rounded-xl h-24"
        />
        <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 font-semibold">
          ➕ Add Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;
