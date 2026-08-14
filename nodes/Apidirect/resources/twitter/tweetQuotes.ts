// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const twitterTweetQuotesFields: INodeProperties[] = [
	{
		displayName: "Tweet ID",
		name: "tweetId",
		type: "string",
		default: "",
		description: "Numeric tweet ID",
		routing: {
			send: {
				type: "query",
				property: "tweet_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["twitter"],
				operation: ["tweetQuotes"],
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
				resource: ["twitter"],
				operation: ["tweetQuotes"],
			},
		},
		options: [
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
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages to fetch, 1-10 (default: 1). Each page fetched is billed as one request.",
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
