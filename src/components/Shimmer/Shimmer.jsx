const Shimmer = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 mb-6 rounded-md shadow-2xl border-slate-400 dark:bg-slate-800">
        <div className="flex justify-center">
          <div className="w-[80%] h-36"></div>
        </div>
        <div className="object-cover text-xl font-semibold text-center"></div>
        <div className="text-center">
          <span className="text-sm text-slate-400 italics"></span>
        </div>
        <div className="flex justify-between">
          <div className="font-medium"></div>
          <div className="font-medium"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-center text-rose-500"></div>
          <button className="flex justify-center p-2 rounded w-30"></button>
        </div>
      </div>
    </>
  );
};
export default Shimmer;
