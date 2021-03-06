import { Offer, OfferDetails } from "../../../types/offers";

export const offersDetailsList: OfferDetails[] = [
	{
		id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR",
		name: "Audi A3 Sedan",
		currency: "€",
		dayPrice: "69,99",
		totalPrice: "209,96",
		imageUrl:
			"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
	},
	{
		id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWMR",
		name: "Audi A4 Avant",
		currency: "€",
		dayPrice: "77,33",
		totalPrice: "231,99",
		imageUrl:
			"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
	},
	{
		id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWAR",
		name: "Audi A4 Avant Aut.",
		currency: "€",
		dayPrice: "82,65",
		totalPrice: "247,96",
		imageUrl:
			"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
	},
];

export const offers: Offer[] = [
	{
		id: "2436432a-e1d5-4649-bece-f98834f6ee1d-SDMR",
		status: "available",
		onRequest: false,
		unlimited: false,
		description: "Audi A3 Sedan oder ähnlich",
		carGroupInfo: {
			bodyStyleKey: "Limousine",
			bodyStyle: "Limousine",
			airCondition: true,
			automatic: false,
			navigationSystem: false,
			modelGuaranteed: false,
			maxPassengers: 5,
			doors: 4,
			driverRequirements: {
				minAge: 21,
				licenseCategory: "",
				licenseMinYears: 2,
				youngDriverAge: 23,
			},
			modelExample: {
				name: "Audi A3 Sedan",
				imageUrl:
					"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
			},
			premium: true,
			luxury: false,
			baggage: {
				bags: 2,
				suitcases: 2,
			},
		},
		vehicleType: "car",
		vehicleGroupInfo: {
			bodyStyleKey: "Limousine",
			bodyStyle: "Limousine",
			airCondition: true,
			automatic: false,
			navigationSystem: false,
			modelGuaranteed: false,
			maxPassengers: 5,
			doors: 4,
			driverRequirements: {
				minAge: 21,
				licenseCategory: "",
				licenseMinYears: 2,
				youngDriverAge: 23,
			},
			modelExample: {
				name: "Audi A3 Sedan",
				imageUrl:
					"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg",
			},
			premium: true,
			luxury: false,
			baggage: {
				bags: 2,
				suitcases: 2,
			},
		},
		acrissCode: "SDMR",
		prices: {
			basePrice: {
				prefix: "",
				amount: {
					value: 166.33,
					display: "166,33",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 166.33,
				trackingNet: 139.77,
			},
			totalPrice: {
				prefix: "",
				amount: {
					value: 209.96,
					display: "209,96",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 209.96,
				trackingNet: 176.44,
			},
			dayPrice: {
				prefix: "",
				amount: {
					value: 69.99,
					display: "69,99",
					currency: "EUR",
				},
				unit: "Tag",
				taxInfo: "inklusive Steuern",
				tracking: 69.99,
				trackingNet: 58.81,
			},
			crossedOutTotalPrice: {
				prefix: "",
				amount: {
					value: 237.96,
					display: "237,96",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 237.96,
				trackingNet: 199.97,
			},
			crossedOutDayPrice: {
				prefix: "",
				amount: {
					value: 79.32,
					display: "79,32",
					currency: "EUR",
				},
				unit: "Tag",
				taxInfo: "inklusive Steuern",
				tracking: 79.32,
				trackingNet: 66.66,
			},
			promoLabel: "Frühbucher Special",
			youngDriverFeeApplied: false,
			isHourlyBooking: false,
		},
		splashImages: [
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-4d-mf-01.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-01.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/audi-a3-4d-mf-01.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/audi-a3-4d-mf-01.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a3-4d-mf-02.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-02.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a3-4d-mf-02.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/audi-a3-4d-mf-02.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/audi-a3-4d-mf-02.jpg",
			},
		],
		images: {
			small:
				"//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a3-limousine-4d-blau-2020.png",
			medium:
				"//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a3-limousine-4d-blau-2020.png",
			large:
				"//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a3-limousine-4d-blau-2020.png",
		},
		includedCharges: [
			{
				title: "Haftpflichtversicherung",
			},
			{
				title: "Wintertaugliche Bereifung",
			},
			{
				title: "900 Kilometer, 0,27 EUR je extra Kilometer",
			},
		],
		payment: {
			selectedPaymentOption: "prepaid",
			paymentOptions: [
				{
					id: "prepaid",
					price: {
						prefix: "",
						amount: {
							value: 209.96,
							display: "209,96",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 209.96,
						trackingNet: 176.44,
					},
					diffPrice: {
						prefix: "",
						amount: {
							value: 0,
							display: "0,00",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "",
						tracking: 0,
						trackingNet: 0,
					},
					priceBreakdown: [
						{
							reference: "rental_period",
							title: "Mietdauer (3 Tage x 55,44)",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 166.33,
									display: "166,33",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 166.33,
								trackingNet: 139.77,
							},
						},
						{
							reference: "fees",
							title: "Gebühren",
							type: "group",
							items: [
								{
									reference: "Y",
									title: "Standortzuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 41.85,
											display: "41,85",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 41.85,
										trackingNet: 35.17,
									},
								},
								{
									reference: "U",
									title: "WLTP Zuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 1.79,
											display: "1,79",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 1.79,
										trackingNet: 1.5,
									},
								},
							],
						},
						{
							reference: "total_price",
							title: "Gesamtpreis",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 209.96,
									display: "209,96",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 209.96,
								trackingNet: 176.44,
							},
						},
					],
					crossedOutTotalPrice: {
						prefix: "",
						amount: {
							value: 237.96,
							display: "237,96",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 237.96,
						trackingNet: 199.97,
					},
					cancellationNote: "Günstigster Preis!",
				},
				{
					id: "pay_on_arrival",
					price: {
						prefix: "",
						amount: {
							value: 254.96,
							display: "254,96",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 254.96,
						trackingNet: 214.25,
					},
					diffPrice: {
						prefix: "",
						amount: {
							value: 45,
							display: "45,00",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 45,
						trackingNet: 37.81,
					},
					priceBreakdown: [
						{
							reference: "rental_period",
							title: "Mietdauer (3 Tage x 67,45)",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 202.35,
									display: "202,35",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 202.35,
								trackingNet: 170.04,
							},
						},
						{
							reference: "fees",
							title: "Gebühren",
							type: "group",
							items: [
								{
									reference: "U",
									title: "WLTP Zuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 1.79,
											display: "1,79",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 1.79,
										trackingNet: 1.5,
									},
								},
								{
									reference: "Y",
									title: "Standortzuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 50.82,
											display: "50,82",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 50.82,
										trackingNet: 42.71,
									},
								},
							],
						},
						{
							reference: "total_price",
							title: "Gesamtpreis",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 254.96,
									display: "254,96",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 254.96,
								trackingNet: 214.25,
							},
						},
					],
					cancellationNote: "Jederzeit flexibel umbuchen!",
				},
			],
			paymentRequired: true,
		},
		sortIndexes: {
			name: 0,
			price: 13,
			popularity: 220,
			datascience: 0,
			subscription: 0,
		},
		mileageInfo: {
			display: "inkl. 900 km",
		},
		rentalDays: 3,
		rentalHours: 0,
		headlines: {
			description: "Audi A3 Sedan",
			shortSubline: "oder ähnlich | Premium Limousine",
			longSubline: "Audi A3 Sedan oder ähnlich | Premium Limousine",
		},
	},
	{
		id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWMR",
		status: "available",
		onRequest: false,
		unlimited: false,
		description: "Audi A4 Avant oder ähnlich",
		carGroupInfo: {
			bodyStyleKey: "Estate",
			bodyStyle: "Kombi",
			airCondition: true,
			automatic: false,
			navigationSystem: false,
			modelGuaranteed: false,
			maxPassengers: 5,
			doors: 5,
			driverRequirements: {
				minAge: 21,
				licenseCategory: "",
				licenseMinYears: 2,
				youngDriverAge: 23,
			},
			modelExample: {
				name: "Audi A4 Avant",
				imageUrl:
					"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
				additionalExamples: ["BMW 3 Series Touring"],
			},
			premium: true,
			luxury: false,
			baggage: {
				bags: 2,
				suitcases: 3,
			},
		},
		vehicleType: "car",
		vehicleGroupInfo: {
			bodyStyleKey: "Estate",
			bodyStyle: "Kombi",
			airCondition: true,
			automatic: false,
			navigationSystem: false,
			modelGuaranteed: false,
			maxPassengers: 5,
			doors: 5,
			driverRequirements: {
				minAge: 21,
				licenseCategory: "",
				licenseMinYears: 2,
				youngDriverAge: 23,
			},
			modelExample: {
				name: "Audi A4 Avant",
				imageUrl:
					"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
				additionalExamples: ["BMW 3 Series Touring"],
			},
			premium: true,
			luxury: false,
			baggage: {
				bags: 2,
				suitcases: 3,
			},
		},
		acrissCode: "FWMR",
		prices: {
			basePrice: {
				prefix: "",
				amount: {
					value: 183.96,
					display: "183,96",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 183.96,
				trackingNet: 154.59,
			},
			totalPrice: {
				prefix: "",
				amount: {
					value: 231.99,
					display: "231,99",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 231.99,
				trackingNet: 194.95,
			},
			dayPrice: {
				prefix: "",
				amount: {
					value: 77.33,
					display: "77,33",
					currency: "EUR",
				},
				unit: "Tag",
				taxInfo: "inklusive Steuern",
				tracking: 77.33,
				trackingNet: 64.98,
			},
			crossedOutTotalPrice: {
				prefix: "",
				amount: {
					value: 268.95,
					display: "268,95",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 268.95,
				trackingNet: 226.01,
			},
			crossedOutDayPrice: {
				prefix: "",
				amount: {
					value: 89.65,
					display: "89,65",
					currency: "EUR",
				},
				unit: "Tag",
				taxInfo: "inklusive Steuern",
				tracking: 89.65,
				trackingNet: 75.34,
			},
			promoLabel: "Frühbucher Special",
			youngDriverFeeApplied: false,
			isHourlyBooking: false,
		},
		splashImages: [
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/bmw-3er-kombi-grau-2019.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/bmw-3er-kombi-grau-2019.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/bmw-3er-kombi-grau-2019.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/bmw-3er-kombi-grau-2019.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/bmw-3er-kombi-grau-2019.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
			},
		],
		images: {
			small:
				"//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a4-kombi-brown-2016.png",
			medium:
				"//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a4-kombi-brown-2016.png",
			large:
				"//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a4-kombi-brown-2016.png",
		},
		includedCharges: [
			{
				title: "Wintertaugliche Bereifung",
			},
			{
				title: "Haftpflichtversicherung",
			},
			{
				title: "900 Kilometer, 0,32 EUR je extra Kilometer",
			},
		],
		payment: {
			selectedPaymentOption: "prepaid",
			paymentOptions: [
				{
					id: "prepaid",
					price: {
						prefix: "",
						amount: {
							value: 231.99,
							display: "231,99",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 231.99,
						trackingNet: 194.95,
					},
					diffPrice: {
						prefix: "",
						amount: {
							value: 0,
							display: "0,00",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "",
						tracking: 0,
						trackingNet: 0,
					},
					priceBreakdown: [
						{
							reference: "rental_period",
							title: "Mietdauer (3 Tage x 61,32)",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 183.96,
									display: "183,96",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 183.96,
								trackingNet: 154.59,
							},
						},
						{
							reference: "fees",
							title: "Gebühren",
							type: "group",
							items: [
								{
									reference: "Y",
									title: "Standortzuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 46.24,
											display: "46,24",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 46.24,
										trackingNet: 38.86,
									},
								},
								{
									reference: "U",
									title: "WLTP Zuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 1.79,
											display: "1,79",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 1.79,
										trackingNet: 1.5,
									},
								},
							],
						},
						{
							reference: "total_price",
							title: "Gesamtpreis",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 231.99,
									display: "231,99",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 231.99,
								trackingNet: 194.95,
							},
						},
					],
					crossedOutTotalPrice: {
						prefix: "",
						amount: {
							value: 268.95,
							display: "268,95",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 268.95,
						trackingNet: 226.01,
					},
					cancellationNote: "Günstigster Preis!",
				},
				{
					id: "pay_on_arrival",
					price: {
						prefix: "",
						amount: {
							value: 281.98,
							display: "281,98",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 281.98,
						trackingNet: 236.96,
					},
					diffPrice: {
						prefix: "",
						amount: {
							value: 49.99,
							display: "49,99",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 49.99,
						trackingNet: 42.01,
					},
					priceBreakdown: [
						{
							reference: "rental_period",
							title: "Mietdauer (3 Tage x 74,66)",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 223.98,
									display: "223,98",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 223.98,
								trackingNet: 188.22,
							},
						},
						{
							reference: "fees",
							title: "Gebühren",
							type: "group",
							items: [
								{
									reference: "U",
									title: "WLTP Zuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 1.79,
											display: "1,79",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 1.79,
										trackingNet: 1.5,
									},
								},
								{
									reference: "Y",
									title: "Standortzuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 56.22,
											display: "56,22",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 56.22,
										trackingNet: 47.24,
									},
								},
							],
						},
						{
							reference: "total_price",
							title: "Gesamtpreis",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 281.98,
									display: "281,98",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 281.98,
								trackingNet: 236.96,
							},
						},
					],
					cancellationNote: "Jederzeit flexibel umbuchen!",
				},
			],
			paymentRequired: true,
		},
		sortIndexes: {
			name: 1,
			price: 20,
			popularity: 196,
			datascience: 0,
			subscription: 0,
		},
		mileageInfo: {
			display: "inkl. 900 km",
		},
		rentalDays: 3,
		rentalHours: 0,
		headlines: {
			description: "Audi A4 Avant",
			shortSubline: "oder ähnlich | Premium Kombi",
			longSubline:
				"Audi A4 Avant, BMW 3 Series Touring oder ähnlich | Premium Kombi",
		},
	},
	{
		id: "2436432a-e1d5-4649-bece-f98834f6ee1d-FWAR",
		status: "available",
		onRequest: false,
		unlimited: false,
		description: "Audi A4 Avant Aut. oder ähnlich",
		carGroupInfo: {
			bodyStyleKey: "Estate",
			bodyStyle: "Kombi",
			airCondition: true,
			automatic: true,
			navigationSystem: false,
			modelGuaranteed: false,
			maxPassengers: 5,
			doors: 5,
			driverRequirements: {
				minAge: 21,
				licenseCategory: "",
				licenseMinYears: 2,
				youngDriverAge: 23,
			},
			modelExample: {
				name: "Audi A4 Avant Aut.",
				imageUrl:
					"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
				additionalExamples: ["Mercedes-Benz C-Class Estate Aut."],
			},
			premium: true,
			luxury: false,
			baggage: {
				bags: 3,
				suitcases: 3,
			},
		},
		vehicleType: "car",
		vehicleGroupInfo: {
			bodyStyleKey: "Estate",
			bodyStyle: "Kombi",
			airCondition: true,
			automatic: true,
			navigationSystem: false,
			modelGuaranteed: false,
			maxPassengers: 5,
			doors: 5,
			driverRequirements: {
				minAge: 21,
				licenseCategory: "",
				licenseMinYears: 2,
				youngDriverAge: 23,
			},
			modelExample: {
				name: "Audi A4 Avant Aut.",
				imageUrl:
					"https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/c4845f6d6d8950431934b646f9af03e96a6b762a.jpeg",
				additionalExamples: ["Mercedes-Benz C-Class Estate Aut."],
			},
			premium: true,
			luxury: false,
			baggage: {
				bags: 3,
				suitcases: 3,
			},
		},
		acrissCode: "FWAR",
		prices: {
			basePrice: {
				prefix: "",
				amount: {
					value: 196.74,
					display: "196,74",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 196.74,
				trackingNet: 165.33,
			},
			totalPrice: {
				prefix: "",
				amount: {
					value: 247.96,
					display: "247,96",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 247.96,
				trackingNet: 208.37,
			},
			dayPrice: {
				prefix: "",
				amount: {
					value: 82.65,
					display: "82,65",
					currency: "EUR",
				},
				unit: "Tag",
				taxInfo: "inklusive Steuern",
				tracking: 82.65,
				trackingNet: 69.46,
			},
			crossedOutTotalPrice: {
				prefix: "",
				amount: {
					value: 286.97,
					display: "286,97",
					currency: "EUR",
				},
				unit: "gesamt",
				taxInfo: "inklusive Steuern",
				tracking: 286.97,
				trackingNet: 241.15,
			},
			crossedOutDayPrice: {
				prefix: "",
				amount: {
					value: 95.66,
					display: "95,66",
					currency: "EUR",
				},
				unit: "Tag",
				taxInfo: "inklusive Steuern",
				tracking: 95.66,
				trackingNet: 80.38,
			},
			promoLabel: "Frühbucher Special",
			youngDriverFeeApplied: false,
			isHourlyBooking: false,
		},
		splashImages: [
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-avant-2019-mf-01.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-01.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-01.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/audi-a4-avant-2019-mf-01.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/audi-a4-avant-2019-mf-01.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-avant-2019-mf-02.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-02.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-02.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/audi-a4-avant-2019-mf-02.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/audi-a4-avant-2019-mf-02.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/audi-a4-avant-2019-mf-03.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-03.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/audi-a4-avant-2019-mf-03.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/audi-a4-avant-2019-mf-03.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/audi-a4-avant-2019-mf-03.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-01.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-02.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-03.jpg",
			},
			{
				url: "https://cdn.sixt.io/fleet/images/1600x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				narrowMedium:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				narrowLarge:
					"https://cdn.sixt.io/fleet/images/750x640/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				wideMedium:
					"https://cdn.sixt.io/fleet/images/780x312/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
				wideLarge:
					"https://cdn.sixt.io/fleet/images/1200x480/mb-c-t-modell-estate-4d-2020-mf-04.jpg",
			},
		],
		images: {
			small:
				"//fileadmin/files/global/user_upload/fleet/png/350x200/audi-a4-kombi-brown-2016.png",
			medium:
				"//fileadmin/files/global/user_upload/fleet/png/630x360/audi-a4-kombi-brown-2016.png",
			large:
				"//fileadmin/files/global/user_upload/fleet/png/1050x600/audi-a4-kombi-brown-2016.png",
		},
		includedCharges: [
			{
				title: "Haftpflichtversicherung",
			},
			{
				title: "Wintertaugliche Bereifung",
			},
			{
				title: "900 Kilometer, 0,32 EUR je extra Kilometer",
			},
		],
		payment: {
			selectedPaymentOption: "prepaid",
			paymentOptions: [
				{
					id: "prepaid",
					price: {
						prefix: "",
						amount: {
							value: 247.96,
							display: "247,96",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 247.96,
						trackingNet: 208.37,
					},
					diffPrice: {
						prefix: "",
						amount: {
							value: 0,
							display: "0,00",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "",
						tracking: 0,
						trackingNet: 0,
					},
					priceBreakdown: [
						{
							reference: "rental_period",
							title: "Mietdauer (3 Tage x 65,58)",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 196.74,
									display: "196,74",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 196.74,
								trackingNet: 165.33,
							},
						},
						{
							reference: "fees",
							title: "Gebühren",
							type: "group",
							items: [
								{
									reference: "U",
									title: "WLTP Zuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 1.79,
											display: "1,79",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 1.79,
										trackingNet: 1.5,
									},
								},
								{
									reference: "Y",
									title: "Standortzuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 49.43,
											display: "49,43",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 49.43,
										trackingNet: 41.54,
									},
								},
							],
						},
						{
							reference: "total_price",
							title: "Gesamtpreis",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 247.96,
									display: "247,96",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 247.96,
								trackingNet: 208.37,
							},
						},
					],
					crossedOutTotalPrice: {
						prefix: "",
						amount: {
							value: 286.97,
							display: "286,97",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 286.97,
						trackingNet: 241.15,
					},
					cancellationNote: "Günstigster Preis!",
				},
				{
					id: "pay_on_arrival",
					price: {
						prefix: "",
						amount: {
							value: 301.95,
							display: "301,95",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 301.95,
						trackingNet: 253.74,
					},
					diffPrice: {
						prefix: "",
						amount: {
							value: 53.99,
							display: "53,99",
							currency: "EUR",
						},
						unit: "gesamt",
						taxInfo: "inklusive Steuern",
						tracking: 53.99,
						trackingNet: 45.37,
					},
					priceBreakdown: [
						{
							reference: "rental_period",
							title: "Mietdauer (3 Tage x 79,99)",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 239.98,
									display: "239,98",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 239.98,
								trackingNet: 201.66,
							},
						},
						{
							reference: "fees",
							title: "Gebühren",
							type: "group",
							items: [
								{
									reference: "Y",
									title: "Standortzuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 60.19,
											display: "60,19",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 60.19,
										trackingNet: 50.58,
									},
								},
								{
									reference: "U",
									title: "WLTP Zuschlag",
									type: "single",
									price: {
										prefix: "",
										amount: {
											value: 1.79,
											display: "1,79",
											currency: "EUR",
										},
										unit: "gesamt",
										taxInfo: "inklusive Steuern",
										tracking: 1.79,
										trackingNet: 1.5,
									},
								},
							],
						},
						{
							reference: "total_price",
							title: "Gesamtpreis",
							type: "single",
							price: {
								prefix: "",
								amount: {
									value: 301.95,
									display: "301,95",
									currency: "EUR",
								},
								unit: "gesamt",
								taxInfo: "inklusive Steuern",
								tracking: 301.95,
								trackingNet: 253.74,
							},
						},
					],
					cancellationNote: "Jederzeit flexibel umbuchen!",
				},
			],
			paymentRequired: true,
		},
		sortIndexes: {
			name: 2,
			price: 22,
			popularity: 182,
			datascience: 0,
			subscription: 0,
		},
		mileageInfo: {
			display: "inkl. 900 km",
		},
		rentalDays: 3,
		rentalHours: 0,
		headlines: {
			description: "Audi A4 Avant Aut.",
			shortSubline: "oder ähnlich | Premium Kombi",
			longSubline:
				"Audi A4 Avant Aut., Mercedes-Benz C-Class Estate Aut. oder ähnlich | Premium Kombi",
		},
	},
];
