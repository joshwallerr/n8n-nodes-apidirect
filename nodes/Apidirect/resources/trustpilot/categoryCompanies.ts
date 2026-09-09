// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const trustpilotCategoryCompaniesFields: INodeProperties[] = [
	{
		displayName: "Category ID",
		name: "categoryId",
		type: "string",
		default: "",
		description: "Trustpilot category slug (e.g. electronics_technology, bank) or a trustpilot.com/categories/... URL.",
		routing: {
			send: {
				type: "query",
				property: "category_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["trustpilot"],
				operation: ["categoryCompanies"],
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
				operation: ["categoryCompanies"],
			},
		},
		options: [
			{
				displayName: "Claimed",
				name: "claimed",
				type: "boolean",
				default: false,
				description: "Whether to only companies that have claimed their Trustpilot profile",
				routing: {
					send: {
						type: "query",
						property: "claimed",
					},
				},
			},
			{
				displayName: "Country",
				name: "country",
				type: "string",
				default: "",
				description: "2-letter ISO 3166-1 country code (default: all countries)",
				routing: {
					send: {
						type: "query",
						property: "country",
					},
				},
			},
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
						name: "3.5",
						value: "3.5",
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
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number, 1-500 (default: 1). Each page returns up to 20 companies.",
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
						name: "Recently Reviewed",
						value: "recently_reviewed",
					},
					{
						name: "Recommended",
						value: "recommended",
					},
				],
				default: "recommended",
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
