// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const blueskyPostFields: INodeProperties[] = [
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Bluesky post URL, e.g. https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l (max 500 characters). Provide exactly one of: URL.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["bluesky"],
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
				resource: ["bluesky"],
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
			{
				displayName: "Post ID",
				name: "postId",
				type: "string",
				default: "",
				description: "The post's AT URI as returned in post_id, e.g. at://did:plc:z72i7hdynmk6r22z27h6tvur/app.bsky.feed.post/3l6oveex3ii2l (max 200 characters)",
				routing: {
					send: {
						type: "query",
						property: "post_id",
					},
				},
			},
		],
	},
];
