import { createAsyncThunk } from "@reduxjs/toolkit";

import service from "../../../service";

import { transformOffers } from "./transformers";

export const getOffersInfo = createAsyncThunk(
	"offers/fetchOffersInfo",
	async () => {
		let response = await service.offers.fetchInfo();
		let offers = transformOffers(response.offers);
		return offers;
	}
);
