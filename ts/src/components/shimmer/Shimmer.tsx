const Shimmer = () => {
    return (
      <div className="w-96 h-80 rounded-lg bg-white shadow-lg animate-pulse overflow-hidden">
        <div className="h-48 bg-zinc-300 w-full rounded-t-lg"></div>
  
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-4 bg-zinc-300 rounded w-2/3"></div>
            <div className="h-4 bg-zinc-300 rounded w-1/5"></div>
          </div>
  
          <div className="h-3 bg-zinc-300 rounded w-1/2"></div>
          <div className="h-3 bg-zinc-300 rounded w-1/3"></div>
  
          <div className="flex flex-col gap-2 mt-4">
            <div className="h-10 bg-emerald-200 rounded-md w-full"></div>
            <div className="h-10 bg-emerald-100 rounded-md w-full"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  