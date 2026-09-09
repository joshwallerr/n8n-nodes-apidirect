// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const amazonSellerProductsFields: INodeProperties[] = [
	{
		displayName: "Seller ID",
		name: "sellerId",
		type: "string",
		default: "",
		description: "Amazon seller ID",
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
				operation: ["sellerProducts"],
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
				operation: ["sellerProducts"],
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
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number, 1-50 (default: 1). Each page returns ~16 results.",
				routing: {
					send: {
						type: "query",
						property: "page",
					},
				},
			},
			{
				displayName: "Sort By",
				name: "sortBy",
				type: "options",
				options: [
					{
						name: "Best Sellers",
						value: "best_sellers",
					},
					{
						name: "Highest Price",
						value: "highest_price",
					},
					{
						name: "Lowest Price",
						value: "lowest_price",
					},
					{
						name: "Newest",
						value: "newest",
					},
					{
						name: "Relevance",
						value: "relevance",
					},
					{
						name: "Reviews",
						value: "reviews",
					},
				],
				default: "relevance",
				description: "Sort order",
				routing: {
					send: {
						type: "query",
						property: "sort_by",
					},
				},
			},
		],
	},
];
