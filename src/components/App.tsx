import { useCallback } from "react";
import { Search } from "./ui/Search";
import { Offers } from "./features/offers";

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
			<Offers />
		</div>
	);
}

export default App;
