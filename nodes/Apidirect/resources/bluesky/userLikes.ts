// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const blueskyUserLikesFields: INodeProperties[] = [
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
				operation: ["userLikes"],
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
				operation: ["userLikes"],
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
				resource: ["bluesky"],
				operation: ["userLikes"],
			},
		},
		options: [
			{
				displayName: "Get Sentiment",
				name: "getSentiment",
				type: "boolean",
				default: false,
				description: "Whether to add AI emotion analysis (dominant emotion, polarity, intensity) to each result. Adds $0.001 per page.",
				routing: {
					send: {
						type: "query",
						property: "get_sentiment",
					},
				},
			},
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages to fetch, 1-20 (default: 1). Each page returns up to 50 posts; you are billed per page returned.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
		],
	},
];
