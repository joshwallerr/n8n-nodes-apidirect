// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googlePlacesReviewsFields: INodeProperties[] = [
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
				operation: ["placesReviews"],
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
				operation: ["placesReviews"],
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
				displayName: "Get Sentiment",
				name: "getSentiment",
				type: "boolean",
				default: false,
				description: "Whether to add AI emotion analysis (dominant emotion, polarity, intensity) to each result. Adds $0.001 per page.",
				routing: {
					send: {
						type: "query",
						property: "get_sentiment",
					},
				},
			},
			{
				displayName: "Language",
				name: "language",
				type: "string",
				default: "en",
				description: "2-letter language code (default: \"en\"). Filters reviews to those originally written in this language.",
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
				description: "Number of pages, 1-10 (default: 1). Each page returns up to 10 reviews and is billed as one request. Each page fetched is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
			{
				displayName: "Sort By",
				name: "sortBy",
				type: "options",
				options: [
					{
						name: "Highest Ranking",
						value: "highest_ranking",
					},
					{
						name: "Lowest Ranking",
						value: "lowest_ranking",
					},
					{
						name: "Most Relevant",
						value: "most_relevant",
					},
					{
						name: "Newest",
						value: "newest",
					},
				],
				default: "most_relevant",
				description: "Sort order",
				routing: {
					send: {
						type: "query",
						property: "sort_by",
					},
				},
			},
			{
				displayName: "Translate Reviews",
				name: "translateReviews",
				type: "boolean",
				default: false,
				description: "Whether to translate the returned reviews into the requested language",
				routing: {
					send: {
						type: "query",
						property: "translate_reviews",
					},
				},
			},
		],
	},
];
