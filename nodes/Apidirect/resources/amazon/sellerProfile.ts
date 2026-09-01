// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const amazonSellerProfileFields: INodeProperties[] = [
	{
		displayName: "Seller ID",
		name: "sellerId",
		type: "string",
		default: "",
		description: "Amazon seller ID (e.g. A2L77EE7U53NWQ)",
		routing: {
			send: {
				type: "query",
				property: "seller_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["amazon"],
				operation: ["sellerProfile"],
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
				operation: ["sellerProfile"],
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
