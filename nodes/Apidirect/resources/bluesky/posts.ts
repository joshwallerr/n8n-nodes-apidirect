// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const blueskyPostsFields: INodeProperties[] = [
	{
		displayName: "Query",
		name: "query",
		type: "string",
		default: "",
		description: "Search keyword (max 500 characters). Bluesky search syntax works: \"exact phrase\", -exclude, from:handle, lang:en, #tag.",
		routing: {
			send: {
				type: "query",
				property: "query",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["bluesky"],
				operation: ["posts"],
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
				resource: ["bluesky"],
				operation: ["posts"],
			},
		},
		options: [
			{
				displayName: "End Date",
				name: "endDate",
				type: "string",
				default: "",
				description: "Only posts up to this date (format: YYYY-MM-DD)",
				routing: {
					send: {
						type: "query",
						property: "end_date",
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
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages to fetch, 1-20 (default: 1). Each page returns up to 50 posts; you are billed per page returned.",
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
						name: "Most Recent",
						value: "most_recent",
					},
					{
						name: "Relevance",
						value: "relevance",
					},
				],
				default: "most_recent",
				description: "Sort order: \"most_recent\" or \"relevance\"",
				routing: {
					send: {
						type: "query",
						property: "sort_by",
					},
				},
			},
			{
				displayName: "Start Date",
				name: "startDate",
				type: "string",
				default: "",
				description: "Only posts from this date onward (format: YYYY-MM-DD)",
				routing: {
					send: {
						type: "query",
						property: "start_date",
					},
				},
			},
		],
	},
];
