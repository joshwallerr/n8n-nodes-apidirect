// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googleNewsArticlesFields: INodeProperties[] = [
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
				operation: ["newsArticles"],
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
				operation: ["newsArticles"],
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
				displayName: "Limit",
				name: "limit",
				type: "number",
				typeOptions: {
					minValue: 1,
				},
				default: 50,
				description: "Max number of results to return",
				routing: {
					send: {
						type: "query",
						property: "limit",
					},
				},
			},
			{
				displayName: "Source",
				name: "source",
				type: "string",
				default: "",
				description: "Filter by news source domain, e.g. \"bbc.com\"",
				routing: {
					send: {
						type: "query",
						property: "source",
					},
				},
			},
			{
				displayName: "Time Published",
				name: "timePublished",
				type: "options",
				options: [
					{
						name: "1d",
						value: "1d",
					},
					{
						name: "1h",
						value: "1h",
					},
					{
						name: "1y",
						value: "1y",
					},
					{
						name: "7d",
						value: "7d",
					},
					{
						name: "Anytime",
						value: "anytime",
					},
				],
				default: "anytime",
				description: "Time filter: \"anytime\", \"1h\", \"1d\", \"7d\", or \"1y\"",
				routing: {
					send: {
						type: "query",
						property: "time_published",
					},
				},
			},
		],
	},
];
