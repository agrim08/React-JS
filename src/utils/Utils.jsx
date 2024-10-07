export const filterData = (searchText, restaurants) => {
  const filteredData = restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
};
