// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const threadsUserFields: INodeProperties[] = [
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "Threads username, with or without leading @ (max 100 characters)",
		routing: {
			send: {
				type: "query",
				property: "username",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["threads"],
				operation: ["user"],
			},
		},
	},
];
