// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const tiktokUserFields: INodeProperties[] = [
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "TikTok username, with or without leading @ (max 100 characters). Provide exactly one of: Username, User ID, URL.",
		routing: {
			send: {
				type: "query",
				property: "username",
			},
		},
		displayOptions: {
			show: {
				resource: ["tiktok"],
				operation: ["user"],
			},
		},
	},
	{
		displayName: "User ID",
		name: "userId",
		type: "string",
		default: "",
		description: "Numeric TikTok user ID, as returned by search_tiktok_users. Provide exactly one of: Username, User ID, URL.",
		routing: {
			send: {
				type: "query",
				property: "user_id",
			},
		},
		displayOptions: {
			show: {
				resource: ["tiktok"],
				operation: ["user"],
			},
		},
	},
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "TikTok profile URL, e.g. https://www.tiktok.com/@tiktok (max 500 characters). Provide exactly one of: Username, User ID, URL.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["tiktok"],
				operation: ["user"],
			},
		},
	},
];
