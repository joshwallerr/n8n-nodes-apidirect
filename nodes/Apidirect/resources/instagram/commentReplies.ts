// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const instagramCommentRepliesFields: INodeProperties[] = [
	{
		displayName: "Comment ID",
		name: "commentId",
		type: "string",
		default: "",
		description: "The comment's numeric ID, from instagram_post_comments (comment_id)",
		routing: {
			send: {
				type: "query",
				property: "comment_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["commentReplies"],
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
				operation: ["commentReplies"],
			},
		},
		options: [
			{
				displayName: "Code",
				name: "code",
				type: "string",
				default: "",
				description: "The post's shortcode, e.g. CxYQJO8xuC6, or numeric media ID (max 50 characters)",
				routing: {
					send: {
						type: "query",
						property: "code",
					},
				},
			},
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
				description: "Number of pages to fetch, 1-10 (default: 1). Each page fetched is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
			{
				displayName: "URL",
				name: "url",
				type: "string",
				default: "",
				description: "Instagram post or reel URL, e.g. https://www.instagram.com/p/CxYQJO8xuC6/ (max 500 characters)",
				routing: {
					send: {
						type: "query",
						property: "url",
					},
				},
			},
		],
	},
];
