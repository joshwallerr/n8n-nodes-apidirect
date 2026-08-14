// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const twitterUserFields: INodeProperties[] = [
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "Twitter username (without @, max 50 characters)",
		routing: {
			send: {
				type: "query",
				property: "username",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["twitter"],
				operation: ["user"],
			},
		},
	},
];
