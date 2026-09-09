// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const youtubeVideosFields: INodeProperties[] = [
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
				resource: ["youtube"],
				operation: ["videos"],
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
				resource: ["youtube"],
				operation: ["videos"],
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
				description: "Number of pages to fetch, 1-20 (default: 1). Each page fetched is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
			{
				displayName: "Upload Date",
				name: "uploadDate",
				type: "options",
				options: [
					{
						name: "Default",
						value: "",
					},
					{
						name: "Last Hour",
						value: "last_hour",
					},
					{
						name: "This Month",
						value: "this_month",
					},
					{
						name: "This Week",
						value: "this_week",
					},
					{
						name: "This Year",
						value: "this_year",
					},
					{
						name: "Today",
						value: "today",
					},
				],
				default: "",
				description: "Filter by upload date: \"last_hour\", \"today\", \"this_week\", \"this_month\", or \"this_year\"",
				routing: {
					send: {
						type: "query",
						property: "upload_date",
					},
				},
			},
		],
	},
];
