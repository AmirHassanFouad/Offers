import { offersDetailsList } from "./constants";

import offersReducer, { State, setLoading, setStatus } from "./slice";
import { getOffersInfo } from "./thunks";

describe("offers reducer", () => {
	const initialState: State = {
		offers: [],
		filteredOffers: [],
		status: "idle",
		isLoading: false,
	};

	it("should handle initial state", () => {
		expect(offersReducer(undefined, { type: "unknown" })).toEqual({
			filteredOffers: [],
			offers: [],
			status: "idle",
			isLoading: false,
		});
	});

	it("should set isLoading to true", () => {
		const actual = offersReducer(initialState, setLoading(true));
		expect(actual.isLoading).toEqual(true);
	});

	it("should change status to loading", () => {
		const actual = offersReducer(initialState, setStatus("loading"));
		expect(actual.status).toEqual("loading");
	});

	it("change loading to true and status to loading when getOffersInfo is pending", () => {
		const pendingAction = {
			type: getOffersInfo.pending.type,
		};
		const state = offersReducer(initialState, pendingAction);
		expect(state.isLoading).toEqual(true);
		expect(state.status).toEqual("loading");
	});

	it("save offers list in offers state when getOffersInfo is fulfilled", () => {
		const fulfilledAction = {
			type: getOffersInfo.fulfilled.type,
			payload: offersDetailsList,
		};

		const state = offersReducer(initialState, fulfilledAction);
		expect(state.isLoading).toEqual(false);
		expect(state.offers).toEqual(offersDetailsList);
		expect(state.status).toEqual("idle");
	});

	it("change loading to false and status to failed when getOffersInfo is rejected", () => {
		const rejectedAction = {
			type: getOffersInfo.rejected.type,
		};

		const state = offersReducer(initialState, rejectedAction);
		expect(state.isLoading).toEqual(false);
		expect(state.status).toEqual("failed");
	});
});
