export interface Info {
	rentalInformationUrl: string;
	termsAndConditionsUrl: string;
	dataPrivacyUrl: string;
	taxInformation: string;
	specialApplied: boolean;
	corporateDiscountNumber: number;
	corporateCustomerNumber: number;
	pickupStationId: string;
	returnStationId: string;
	pickupDate: Date;
	returnDate: Date;
	vehicleType: string;
}

export interface DriverRequirements {
	minAge: number;
	licenseCategory: string;
	licenseMinYears: number;
	youngDriverAge: number;
}

export interface ModelExample {
	name: string;
	imageUrl: string;
	additionalExamples?: string[];
}

export interface Baggage {
	bags: number;
	suitcases: number;
}

export interface CarGroupInfo {
	bodyStyleKey: string;
	bodyStyle: string;
	airCondition: boolean;
	automatic: boolean;
	navigationSystem: boolean;
	modelGuaranteed: boolean;
	maxPassengers: number;
	doors: number;
	driverRequirements: DriverRequirements;
	modelExample: ModelExample;
	premium: boolean;
	luxury: boolean;
	baggage: Baggage;
}

export interface VehicleGroupInfo {
	bodyStyleKey: string;
	bodyStyle: string;
	airCondition: boolean;
	automatic: boolean;
	navigationSystem: boolean;
	modelGuaranteed: boolean;
	maxPassengers: number;
	doors: number;
	driverRequirements: DriverRequirements;
	modelExample: ModelExample;
	premium: boolean;
	luxury: boolean;
	baggage: Baggage;
}

type Currency = "USD" | "EUR";

export interface Amount {
	value: number;
	display: string;
	currency: Currency;
}

export interface BasePrice {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface TotalPrice {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface DayPrice {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface CrossedOutTotalPrice {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface CrossedOutDayPrice {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface Prices {
	basePrice: BasePrice;
	totalPrice: TotalPrice;
	dayPrice: DayPrice;
	crossedOutTotalPrice: CrossedOutTotalPrice;
	crossedOutDayPrice: CrossedOutDayPrice;
	promoLabel: string;
	youngDriverFeeApplied: boolean;
	isHourlyBooking: boolean;
}

export interface SplashImage {
	url: string;
	narrowMedium: string;
	narrowLarge: string;
	wideMedium: string;
	wideLarge: string;
}

export interface Images {
	small: string;
	medium: string;
	large: string;
}

export interface IncludedCharge {
	title: string;
}

export interface Price {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface DiffPrice {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface Price {
	prefix: string;
	amount: Amount;
	unit: string;
	taxInfo: string;
	tracking: number;
	trackingNet: number;
}

export interface Item {
	reference: string;
	title: string;
	type: string;
	price: Price;
}

export interface PriceBreakdown {
	reference: string;
	title: string;
	type: string;
	price?: Price;
	items?: Item[];
}

export interface PaymentOption {
	id: string;
	price: Price;
	diffPrice: DiffPrice;
	priceBreakdown: PriceBreakdown[];
	crossedOutTotalPrice?: CrossedOutTotalPrice;
	cancellationNote: string;
}

export interface Payment {
	selectedPaymentOption: string;
	paymentOptions: PaymentOption[];
	paymentRequired: boolean;
}

export interface SortIndexes {
	name: number;
	price: number;
	popularity: number;
	datascience: number;
	subscription: number;
}

export interface MileageInfo {
	display: string;
}

export interface Headlines {
	description: string;
	shortSubline: string;
	longSubline: string;
}

export interface Offer {
	id: string;
	status: string;
	onRequest: boolean;
	unlimited: boolean;
	description: string;
	carGroupInfo: CarGroupInfo;
	vehicleType: string;
	vehicleGroupInfo: VehicleGroupInfo;
	acrissCode: string;
	prices: Prices;
	splashImages: SplashImage[];
	images: Images;
	includedCharges: IncludedCharge[];
	payment: Payment;
	sortIndexes: SortIndexes;
	mileageInfo: MileageInfo;
	rentalDays: number;
	rentalHours: number;
	headlines: Headlines;
}

export interface OffersInfoResponse {
	info: Info;
	offers: Offer[];
	recommendations?: any;
	recommendations_v2?: any;
}

interface OfferDetails {
	id: string;
	name: string;
	imageUrl: string;
	currency: string;
	dayPrice: string;
	totalPrice: string;
}
