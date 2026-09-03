// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const instagramUserFollowingFields: INodeProperties[] = [
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
				operation: ["userFollowing"],
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
				operation: ["userFollowing"],
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
				resource: ["instagram"],
				operation: ["userFollowing"],
			},
		},
		options: [
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages to fetch, 1-20 (default: 1). Each page returns up to 50 accounts. Each page fetched is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
			{
				displayName: "Query",
				name: "query",
				type: "string",
				default: "",
				description: "Optional keyword to search the accounts this user follows by username or name (max 100 characters). Returns up to 50 matches in a single request; pages is ignored.",
				routing: {
					send: {
						type: "query",
						property: "query",
					},
				},
			},
		],
	},
];
