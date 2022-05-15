import { Card } from "../../../ui/Card";
import { Image } from "../../../ui/Image";
import { OfferDetails } from "../../../../types/offers";
import { Row, Details, Name, Text } from "./StyledComponents";

interface Props {
	offer: OfferDetails;
}

export function Offer(props: Props) {
	const { name, imageUrl, currency, dayPrice, totalPrice } = props.offer;

	return (
		<Card style={{ padding: "10px" }}>
			<Image src={imageUrl} width="100%" height="70%" />
			<Details>
				<Name>{name}</Name>
				<Row>
					<Text size="small" color="alert">
						{currency}
					</Text>
					<Text bold size="large" color="alert">
						{dayPrice}
					</Text>
					<Text color="alert">per day</Text>
				</Row>
				<Row>
					<Text size="small">{currency}</Text>
					<Text>{totalPrice}</Text>
					<Text>total</Text>
				</Row>
			</Details>
		</Card>
	);
}
