import { Empty } from "./ui/Empty";
import { useCallback } from "react";
import { Search } from "./ui/Search";
import { Offers } from "./features/offers";

import ErrorBoundary from "../HOC/ErrorBoundary";
import { useAppDispatch } from "../state/config/hooks";
import { filterOffers } from "../state/modules/offers/slice";

function App(): JSX.Element {
	const dispatch = useAppDispatch();

	const handleChange = useCallback(
		(value: string) => {
			dispatch(filterOffers(value));
		},
		[dispatch]
	);

	return (
		<div>
			<Search onChange={handleChange} />
			<ErrorBoundary
				fallBackComponent={
					<Empty>
						<h2>Oops! Something went wrong</h2>
					</Empty>
				}
			>
				<Offers />
			</ErrorBoundary>
		</div>
	);
}

export default App;
