const Loader = () => {
  return (
    <div className="flex flex-row flex-wrap" data-testid="shimmer">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className=" bg-gray-300 m-5 h-52 w-52"></div>
        ))}
    </div>
  );
};

export default Loader;
