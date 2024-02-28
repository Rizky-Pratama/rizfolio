import { ImSpinner9 } from "react-icons/im";
const Loading = () => {
  return (
    <div className="h-lvh w-lvw bg-stone-950 grid place-items-center">
      <ImSpinner9 size={70} className="text-indigo-700 animate-spin" />
    </div>
  );
};

export default Loading;
