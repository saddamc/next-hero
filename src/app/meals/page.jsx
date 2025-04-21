import Meals from "@/components/Meals";

export const metadata = {
    title: {
        absolute: "Meals",
    },
    description: "Meals Page",
  };


const MealsPage = () => {
    
    return (
        <div className="p-12">
            <h1>Choose Your Meals</h1>
            <p className="text-3xl font-semibold text-red-400 styles.text_large ">choose meals of you choice by searching.............
            </p>
            <Meals />
        </div>
    );
};

export default MealsPage;