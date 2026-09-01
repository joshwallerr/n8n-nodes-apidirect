// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const amazonSellerReviewsFields: INodeProperties[] = [
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
				operation: ["sellerReviews"],
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
				operation: ["sellerReviews"],
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
				displayName: "Get Sentiment",
				name: "getSentiment",
				type: "boolean",
				default: false,
				description: "Whether to add AI emotion analysis (dominant emotion, polarity, intensity) to each result. Adds $0.001 per request.",
				routing: {
					send: {
						type: "query",
						property: "get_sentiment",
					},
				},
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number, 1-20 (default: 1)",
				routing: {
					send: {
						type: "query",
						property: "page",
					},
				},
			},
			{
				displayName: "Star Rating",
				name: "starRating",
				type: "options",
				options: [
					{
						name: "1 Stars",
						value: "1_stars",
					},
					{
						name: "2 Stars",
						value: "2_stars",
					},
					{
						name: "3 Stars",
						value: "3_stars",
					},
					{
						name: "4 Stars",
						value: "4_stars",
					},
					{
						name: "5 Stars",
						value: "5_stars",
					},
					{
						name: "All",
						value: "all",
					},
					{
						name: "Critical",
						value: "critical",
					},
					{
						name: "Positive",
						value: "positive",
					},
				],
				default: "all",
				description: "Star rating filter",
				routing: {
					send: {
						type: "query",
						property: "star_rating",
					},
				},
			},
		],
	},
];
