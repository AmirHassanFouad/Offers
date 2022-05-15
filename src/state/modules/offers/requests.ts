import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import { State } from "./slice";
import { getOffersInfo } from "./thunks";

/**
 * Requests Reducer
 */
export const requestsReducer = (builder: ActionReducerMapBuilder<State>) =>
	builder
		.addCase(getOffersInfo.pending, (state) => {
			state.status = "loading";
			state.isLoading = true;
		})
		.addCase(getOffersInfo.fulfilled, (state, action) => {
			state.status = "idle";
			state.isLoading = false;
			state.offers = action.payload;
			state.filteredOffers = action.payload;
		})
		.addCase(getOffersInfo.rejected, (state) => {
			state.status = "failed";
			state.isLoading = false;
		});
