// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const instagramPostLikesFields: INodeProperties[] = [
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Instagram post or reel URL, e.g. https://www.instagram.com/p/CxYQJO8xuC6/ (max 500 characters). Provide exactly one of: URL, Code.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["postLikes"],
			},
		},
	},
	{
		displayName: "Code",
		name: "code",
		type: "string",
		default: "",
		description: "The post's shortcode, e.g. CxYQJO8xuC6, or numeric media ID (max 50 characters). Provide exactly one of: URL, Code.",
		routing: {
			send: {
				type: "query",
				property: "code",
			},
		},
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["postLikes"],
			},
		},
	},
];
