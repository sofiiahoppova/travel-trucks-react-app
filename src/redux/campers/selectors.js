export const selectCampers = (state) => state.campers.campers.items;
export const selectCurrent = (state) => state.campers.campers.current;
export const selectTotal = (state) => state.campers.campers.total;
export const selectLoading = (state) => state.campers.campers.loading;
export const selectError = (state) => state.campers.campers.error;

export const selectFavouriteCampers = (state) => state.campers.favouriteCampers;
