// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googlePlacesDetailsFields: INodeProperties[] = [
	{
		displayName: "Place ID",
		name: "placeId",
		type: "string",
		default: "",
		description: "Google place_id (e.g. ChIJifIePKtZwokRVZ-UdRGkZzs)",
		routing: {
			send: {
				type: "query",
				property: "place_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["google"],
				operation: ["placesDetails"],
			},
		},
	},
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {
		},
		displayOptions: {
			show: {
				resource: ["google"],
				operation: ["placesDetails"],
			},
		},
		options: [
			{
				displayName: "Country",
				name: "country",
				type: "string",
				default: "us",
				description: "2-letter country code (default: \"us\")",
				routing: {
					send: {
						type: "query",
						property: "country",
					},
				},
			},
			{
				displayName: "Language",
				name: "language",
				type: "string",
				default: "en",
				description: "2-letter language code (default: \"en\")",
				routing: {
					send: {
						type: "query",
						property: "language",
					},
				},
			},
		],
	},
];
