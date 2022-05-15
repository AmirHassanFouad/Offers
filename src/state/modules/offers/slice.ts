import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OfferDetails } from "../../../types/offers";

import { requestsReducer } from "./requests";

type Status = "loading" | "idle" | "failed";

export interface State {
	offers: OfferDetails[];
	filteredOffers: OfferDetails[];
	status: Status;
	isLoading: boolean;
}

const initialState: State = {
	offers: [],
	filteredOffers: [],
	status: "idle",
	isLoading: false,
};

export const offersSlice = createSlice({
	name: "offers",
	initialState,
	reducers: {
		setLoading: (state: State, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setStatus: (state: State, action: PayloadAction<Status>) => {
			state.status = action.payload;
		},
		filterOffers: (state: State, action: PayloadAction<string>) => {
			state.filteredOffers =
				action.payload.trim() === ""
					? state.offers
					: state.offers.filter((offer) =>
							offer.name.toLowerCase().includes(action.payload.toLowerCase())
					  );
		},
	},
	extraReducers: requestsReducer,
});

/** Actions */
export const { setLoading, setStatus, filterOffers } = offersSlice.actions;

/* Reducer */
export default offersSlice.reducer;
