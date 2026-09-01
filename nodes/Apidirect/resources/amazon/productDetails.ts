// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const amazonProductDetailsFields: INodeProperties[] = [
	{
		displayName: "Asin",
		name: "asin",
		type: "string",
		default: "",
		description: "10-character Amazon ASIN (e.g. B07ZPKN6YR)",
		routing: {
			send: {
				type: "query",
				property: "asin",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["amazon"],
				operation: ["productDetails"],
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
				resource: ["amazon"],
				operation: ["productDetails"],
			},
		},
		options: [
			{
				displayName: "Country",
				name: "country",
				type: "string",
				default: "us",
				description: "Marketplace country code (default: \"us\")",
				routing: {
					send: {
						type: "query",
						property: "country",
					},
				},
			},
		],
	},
];
