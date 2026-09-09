// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const trustpilotCategoryFields: INodeProperties[] = [
	{
		displayName: "Category ID",
		name: "categoryId",
		type: "string",
		default: "",
		description: "Trustpilot category slug (e.g. electronics_technology) or a trustpilot.com/categories/... URL.",
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
				operation: ["category"],
			},
		},
	},
];
