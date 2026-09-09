// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const trustpilotUserFields: INodeProperties[] = [
	{
		displayName: "User ID",
		name: "userId",
		type: "string",
		default: "",
		description: "Reviewer ID (24 hex characters, a review's author_id) or a trustpilot.com/users/... URL.",
		routing: {
			send: {
				type: "query",
				property: "user_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["trustpilot"],
				operation: ["user"],
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
				operation: ["user"],
			},
		},
		options: [
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number, 1-500 (default: 1). Each page returns up to 20 reviews.",
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
