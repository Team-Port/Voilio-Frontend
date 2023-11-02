const Category = ({ category }) => {
  let bgColor, label;
  if (category === "ALL") {
    bgColor = "bg-slate-400";
    label = "ALL";
  } else if (category === "IT") {
    bgColor = "bg-slate-400";
    label = "IT";
  } else if (category === "DESIGN") {
    bgColor = "bg-rose-200";
    label = "Design";
  } else if (category === "DANCE") {
    bgColor = "bg-red-300";
    label = "Dance";
  } else if (category === "EXERCISE") {
    bgColor = "bg-emerald-200";
    label = "Exercise";
  } else if (category === "LANGUAGE") {
    bgColor = "bg-slate-300";
    label = "Laguage";
  } else if (category === "SALES") {
    bgColor = "bg-amber-200";
    label = "Sales";
  } else return null;

  return (
    <div
      className={`flex items-center justify-center w-[75px] h-[22px] pb-[2px] ${bgColor} rounded-[10px] mr-[3px]`}
    >
      <div className="items-center text-center text-white text-[15px] font-semibold">
        {label}
      </div>
    </div>
  );
};
export default Category;
