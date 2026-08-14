// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googleForumPostsFields: INodeProperties[] = [
	{
		displayName: "Query",
		name: "query",
		type: "string",
		default: "",
		description: "Search keyword (max 500 characters)",
		routing: {
			send: {
				type: "query",
				property: "query",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["google"],
				operation: ["forumPosts"],
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
				operation: ["forumPosts"],
			},
		},
		options: [
			{
				displayName: "Country",
				name: "country",
				type: "string",
				default: "",
				description: "2-letter ISO country code, e.g. \"us\", \"gb\"",
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
				description: "Page number for pagination (default: 1)",
				routing: {
					send: {
						type: "query",
						property: "page",
					},
				},
			},
			{
				displayName: "Time",
				name: "time",
				type: "options",
				options: [
					{
						name: "Any",
						value: "any",
					},
					{
						name: "Day",
						value: "day",
					},
					{
						name: "Hour",
						value: "hour",
					},
					{
						name: "Month",
						value: "month",
					},
					{
						name: "Week",
						value: "week",
					},
					{
						name: "Year",
						value: "year",
					},
				],
				default: "any",
				description: "Time filter: \"any\", \"hour\", \"day\", \"week\", \"month\", or \"year\"",
				routing: {
					send: {
						type: "query",
						property: "time",
					},
				},
			},
		],
	},
];
