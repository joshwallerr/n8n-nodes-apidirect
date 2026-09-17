// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const blueskyPostLikesFields: INodeProperties[] = [
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
				operation: ["postLikes"],
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
				operation: ["postLikes"],
			},
		},
		options: [
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages to fetch, 1-20 (default: 1). Each page returns up to 50 accounts; you are billed per page returned.",
				routing: {
					send: {
						type: "query",
						property: "pages",
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
