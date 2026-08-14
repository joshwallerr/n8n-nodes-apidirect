// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googlePlacesPhotosFields: INodeProperties[] = [
	{
		displayName: "Place ID",
		name: "placeId",
		type: "string",
		default: "",
		description: "Google place_id",
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
				operation: ["placesPhotos"],
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
				operation: ["placesPhotos"],
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
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages to fetch, 1-10 (default: 1). Each page returns up to 10 items and is billed as one request. Each page fetched is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
		],
	},
];
