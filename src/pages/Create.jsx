import { useState } from "react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useFirestore } from "../hooks/useFirestore";
import { useNavigate } from "react-router-dom";
function Create() {
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  const { addDocument } = useFirestore("recepies");

  const addIngredient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.parentElement.parentElement);
    const ingredient = formData.get("ingredient");

    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description");
    await addDocument({
      title,
      cookingTime: `${cookingTime} minutes`,
      description,
      ingredients,
    });
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-purple-700 flex items-center gap-2">
          🍳 New Recipe
        </h2>
        <FormInput
          name="title"
          label="Title"
          type="text"
          className="w-full mb-4 p-3 border border-gray-300 rounded-xl text-sm sm:text-base"
        />
        <FormInput
          name="cookingTime"
          label="Cooking Time"
          type="numbers"
          className="w-full mb-4 p-3 border border-gray-300 rounded-xl text-sm sm:text-base"
        />
        <div>
          <FormInput
            name="ingredient"
            label="Ingredients"
            type="text"
            className="w-full mb-4 p-3 border border-gray-300 rounded-xl text-sm sm:text-base"
          />
          <button
            onClick={addIngredient}
            className=" w-3xs bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 font-semibold text-sm sm:text-base transition duration-300"
          >
            ➕
          </button>
          <p>Ingredients: {ingredients.join(", ")}</p>
        </div>
        <FormTextArea
          name="description"
          label="Description"
          className="w-full mb-6 p-3 border border-gray-300 rounded-xl h-28 text-sm sm:text-base"
        />
        <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 font-semibold text-sm sm:text-base transition duration-300">
          ➕ Add Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;
