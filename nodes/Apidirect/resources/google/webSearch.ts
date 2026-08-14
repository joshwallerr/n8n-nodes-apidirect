// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googleWebSearchFields: INodeProperties[] = [
	{
		displayName: "Query",
		name: "query",
		type: "string",
		default: "",
		description: "Search keyword (max 500 characters). Supports Google advanced operators (site:, inurl:, intitle:, etc.).",
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
				operation: ["webSearch"],
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
				operation: ["webSearch"],
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
				displayName: "Device",
				name: "device",
				type: "options",
				options: [
					{
						name: "Desktop",
						value: "desktop",
					},
					{
						name: "Mobile",
						value: "mobile",
					},
				],
				default: "desktop",
				description: "Device profile: \"desktop\" or \"mobile\"",
				routing: {
					send: {
						type: "query",
						property: "device",
					},
				},
			},
			{
				displayName: "Include AI Overview",
				name: "includeAiOverview",
				type: "boolean",
				default: false,
				description: "Whether to include Google AI Overview when available (+$0.002 flat surcharge)",
				routing: {
					send: {
						type: "query",
						property: "include_ai_overview",
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
				displayName: "Location",
				name: "location",
				type: "string",
				default: "",
				description: "City-level geo location (e.g. \"London,England,United Kingdom\")",
				routing: {
					send: {
						type: "query",
						property: "location",
					},
				},
			},
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of result pages to fetch, 1-10 (default: 1). 10 results per page. Each page fetched is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
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
