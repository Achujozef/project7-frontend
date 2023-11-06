import React, { useState, useEffect } from "react";
import { getUserDiet, updateDiet } from "../api/userdiet";

function DietPlans() {
  const [diets, setDiets] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState(null);

  useEffect(() => {
    // Fetch user's diet plans using the getUserDiet API function
    async function fetchUserDiets() {
      try {
        const data = await getUserDiet();
        setDiets(data); // Update the state with fetched data
        // Optionally, set a default selected diet here
        // setSelectedDiet(data[0]);
      } catch (error) {
        console.error("Error fetching user's diet plans:", error);
      }
    }

    fetchUserDiets();
  }, []);

  const handleDietSelection = (diet) => {
    setSelectedDiet(diet);
  };

  const handleNotificationToggle = () => {
    // Implement logic to toggle notifications for the selected diet
  };

  const handleFoodCompletion = (foodItem) => {
    // Implement logic to mark a food item as completed
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes (e.g., updated notifications or completed foods)
    // using the updateDiet API function
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Your Diet Plans</h1>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <label className="block font-bold">Select Diet:</label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) => handleDietSelection(e.target.value)}
          >
            {diets.map((diet) => (
              <option key={diet.id} value={diet.id}>
                {diet.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <label className="block font-bold">Notifications:</label>
          <button
            className={`w-full p-2 rounded ${
              selectedDiet?.notifications ? "bg-blue-500" : "bg-red-500"
            } text-white`}
            onClick={handleNotificationToggle}
          >
            {selectedDiet?.notifications ? "On" : "Off"}
          </button>
        </div>
        <div className="w-1/3">
          <label className="block font-bold">Save Changes:</label>
          <button
            className="w-full p-2 rounded bg-green-500 text-white"
            onClick={handleSaveChanges}
          >
            Save
          </button>
        </div>
      </div>
      {selectedDiet && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{selectedDiet.name}</h2>
          <ul className="list-disc pl-4 mt-2">
            {selectedDiet.foodItems.map((foodItem) => (
              <li key={foodItem.id} className="mb-2">
                {foodItem.time}: {foodItem.calories} calories{" "}
                <button
                  className="px-2 py-1 ml-2 bg-blue-500 text-white rounded"
                  onClick={() => handleFoodCompletion(foodItem)}
                >
                  Done
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DietPlans;
