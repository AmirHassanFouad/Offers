import { useEffect, useMemo } from "react";

import { Spinner } from "../../ui/Spinner";
import { Empty } from "../../ui/Empty";
import { getOffersInfo } from "../../../state/modules/offers/thunks";
import { useAppDispatch, useAppSelector } from "../../../state/config/hooks";
import {
	getOffers,
	getStatus,
	isLoading,
} from "../../../state/modules/offers/selectors";

import { Offer } from "./components/Offer";
import { Grid, Wrapper } from "./components/StyledComponents";

const ERROR_MESSAGE = "💥 Something went wrong while fetching offers data 💥";
const EMPTY_MESSAGE =
	"Sorry, we couldn't find any offer with your search criteria";

export function Offers() {
	const dispatch = useAppDispatch();
	const loading = useAppSelector(isLoading);
	const status = useAppSelector(getStatus);
	const offers = useAppSelector(getOffers);

	useEffect(() => {
		dispatch(getOffersInfo());
	}, [dispatch]);

	useEffect(() => {
		if (status === "failed") throw new Error(ERROR_MESSAGE);
	}, [status]);

	const renderOffers = useMemo(() => {
		if (offers.length === 0)
			return (
				<Empty>
					<h2>{EMPTY_MESSAGE}</h2>
				</Empty>
			);

		return (
			<Grid>
				{offers.map((offer) => (
					<Offer key={offer.id} offer={offer} />
				))}
			</Grid>
		);
	}, [offers]);

	return <Wrapper>{loading ? <Spinner /> : renderOffers}</Wrapper>;
}
