const Category = ({ category }) => {
  let bgColor, label;
  if (category === "ALL") {
    bgColor = "bg-slate-400";
    label = "ALL";
  } else if (category === "IT") {
    bgColor = "bg-gray-300";
    label = "IT";
  } else if (category === "DESIGN") {
    bgColor = "bg-[#EAB191]";
    label = "Design";
  } else if (category === "DANCE") {
    bgColor = "bg-[#FACAD5]";
    label = "Dance";
  } else if (category === "EXERCISE") {
    bgColor = "bg-[#85AED3]";
    label = "Exercise";
  } else if (category === "LANGUAGE") {
    bgColor = "bg-[#CFB8E1]";
    label = "Language";
  } else if (category === "SALES") {
    bgColor = "bg-[#A9D8B6]";
    label = "Sales";
  } else return null;

  return (
    <div
      className={`flex items-center min-w-[60px] justify-center h-[22px] pb-[2px] ${bgColor} rounded-[20px] px-[10px]`}
    >
      <div className="items-center text-center text-white text-[15px] font-semibold">
        {label}
      </div>
    </div>
  );
};
export default Category;
