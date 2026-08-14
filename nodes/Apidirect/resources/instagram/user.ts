// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const instagramUserFields: INodeProperties[] = [
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "Instagram username, with or without leading @ (max 100 characters). Provide exactly one of: Username, URL.",
		routing: {
			send: {
				type: "query",
				property: "username",
			},
		},
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["user"],
			},
		},
	},
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Instagram profile URL, e.g. https://instagram.com/natgeo (max 500 characters). Provide exactly one of: Username, URL.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["user"],
			},
		},
	},
];
