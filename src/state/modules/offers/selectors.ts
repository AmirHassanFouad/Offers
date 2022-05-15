import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../config/store";

export const getState = (state: RootState) => state.offers;

export const isLoading = createSelector(getState, (state) => state.isLoading);
export const getStatus = createSelector(getState, (state) => state.status);
export const getAllOffers = createSelector(getState, (state) => state.offers);
export const getOffers = createSelector(
	getState,
	(state) => state.filteredOffers
);
