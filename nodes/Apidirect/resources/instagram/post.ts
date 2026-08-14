// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const instagramPostFields: INodeProperties[] = [
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Instagram post, reel, or story URL, e.g. https://www.instagram.com/p/CxYQJO8xuC6/ (max 500 characters). Provide exactly one of: URL, Code.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["post"],
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
				operation: ["post"],
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
				operation: ["post"],
			},
		},
		options: [
			{
				displayName: "Get Sentiment",
				name: "getSentiment",
				type: "boolean",
				default: false,
				description: "Whether to add AI emotion analysis (dominant emotion, polarity, intensity) to each result. Adds $0.001 per request.",
				routing: {
					send: {
						type: "query",
						property: "get_sentiment",
					},
				},
			},
		],
	},
];
