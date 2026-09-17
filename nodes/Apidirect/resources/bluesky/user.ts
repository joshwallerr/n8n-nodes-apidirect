// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const blueskyUserFields: INodeProperties[] = [
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "Bluesky handle, e.g. bsky.app, with or without leading @, or the account's DID (max 100 characters). Provide exactly one of: Username, URL.",
		routing: {
			send: {
				type: "query",
				property: "username",
			},
		},
		displayOptions: {
			show: {
				resource: ["bluesky"],
				operation: ["user"],
			},
		},
	},
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Bluesky profile URL, e.g. https://bsky.app/profile/bsky.app (max 500 characters). Provide exactly one of: Username, URL.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["bluesky"],
				operation: ["user"],
			},
		},
	},
];
