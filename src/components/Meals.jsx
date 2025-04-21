"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        if (search.trim() === "") {
            setMeals([])
            return
        }
        setLoading(true)
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const data = await res.json();
            setMeals(data.meals || []);
            console.log(data)
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    };

    const handler = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        loadData();
    }, [search]);

    return (
        <div className="mt-12 flex flex-col items-start gap-6">
            <div className="flex gap-2">
                <input
                    value={search}
                    onChange={handler}
                    className="p-4 bg-black text-white outline-none border-transparent"
                    type="text"
                    placeholder="Search Meals..."
                />
                <button
                    onClick={loadData}
                    className="bg-red-500 p-4 text-white cursor-pointer"
                >
                    Search
                </button>
            </div>
            {/* Map */}
            <div className="grid grid-cols-3 gap-12 w-full">
                {loading ? (
                    <div className="col-span-3 flex justify-center items-center">
                        <div className="w-10 h-10 border-4 border-t-transparent border-red-500 rounded-full animate-spin"></div>
                    </div>
                ) : meals && meals.length > 0 ? (
                    meals.map((meal) => (
                        <div key={meal.idMeal} className="border-2 p-4">
                            <Image  className="object-cover rounded-lg"  src={meal?.strMealThumb} alt={meal?.strMeal || "Meal Image"} width={500} height={500} ></Image>
                            <h6 className="text-xl font-bold">{meal.strMeal}</h6>
                            <p className="text-sm mt-2">
                                {meal.strInstructions.slice(0, 100)}...
                            </p>
                        </div>
                    ))
                ) : (
                    search.trim() !== "" && (
                        <p className="text-Black text-lg col-span-3">No Data Found.......</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Meals;
