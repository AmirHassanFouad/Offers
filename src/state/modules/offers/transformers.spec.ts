import { offers, offersDetailsList } from "./constants";

import { transformOffers } from "./transformers";

describe("offers transformers", () => {
	it("maps offers to offers details list", () => {
		expect(transformOffers(offers)).toEqual(offersDetailsList);
	});
});
