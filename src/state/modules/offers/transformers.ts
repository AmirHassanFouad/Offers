import { Offer, OfferDetails } from "../../../types/offers";

export enum Currency {
	EUR = "€",
	USD = "$",
}

export const transformOffers = (offers: Offer[]): OfferDetails[] => {
	return offers.map((offer) => {
		return {
			id: offer.id,
			name: offer.carGroupInfo.modelExample.name,
			imageUrl: offer.carGroupInfo.modelExample.imageUrl,
			currency: Currency[offer.prices.totalPrice.amount.currency],
			dayPrice: offer.prices.dayPrice.amount.display,
			totalPrice: offer.prices.totalPrice.amount.display,
		};
	});
};
