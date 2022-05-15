import { OffersInfoResponse } from "../types/offers";
import Cache from "./cache";

const cacheAgeInHours = 6;
const cache = new Cache<OffersInfoResponse>();
const API_BASE_URL = "http://cdn.sixt.io/codingtask/offers.json";

const service = {
	offers: {
		fetchInfo: async (): Promise<OffersInfoResponse> => {
			if (
				cache.has(API_BASE_URL) &&
				!cache.isExpired(API_BASE_URL, cacheAgeInHours)
			)
				return cache.get(API_BASE_URL) as OffersInfoResponse;
			else {
				return await fetch(`${API_BASE_URL}`).then((response) =>
					response.json()
				);
			}
		},
	},
};

export default service;
