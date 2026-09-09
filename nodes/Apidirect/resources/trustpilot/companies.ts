// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const trustpilotCompaniesFields: INodeProperties[] = [
	{
		displayName: "Query",
		name: "query",
		type: "string",
		default: "",
		description: "Company name or keyword (max 500 characters)",
		routing: {
			send: {
				type: "query",
				property: "query",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["trustpilot"],
				operation: ["companies"],
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
				resource: ["trustpilot"],
				operation: ["companies"],
			},
		},
		options: [
			{
				displayName: "Min Rating",
				name: "minRating",
				type: "options",
				options: [
					{
						name: "3",
						value: "3",
					},
					{
						name: "4",
						value: "4",
					},
					{
						name: "4.5",
						value: "4.5",
					},
					{
						name: "Default",
						value: "",
					},
				],
				default: "",
				description: "Minimum TrustScore",
				routing: {
					send: {
						type: "query",
						property: "min_rating",
					},
				},
			},
			{
				displayName: "Min Review Count",
				name: "minReviewCount",
				type: "options",
				options: [
					{
						name: "100",
						value: "100",
					},
					{
						name: "25",
						value: "25",
					},
					{
						name: "250",
						value: "250",
					},
					{
						name: "50",
						value: "50",
					},
					{
						name: "500",
						value: "500",
					},
					{
						name: "Default",
						value: "",
					},
				],
				default: "",
				description: "Minimum number of reviews",
				routing: {
					send: {
						type: "query",
						property: "min_review_count",
					},
				},
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number, 1-500 (default: 1). Each page returns up to 10 results.",
				routing: {
					send: {
						type: "query",
						property: "page",
					},
				},
			},
		],
	},
];
