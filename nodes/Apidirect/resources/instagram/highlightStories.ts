// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const instagramHighlightStoriesFields: INodeProperties[] = [
	{
		displayName: "Highlight ID",
		name: "highlightId",
		type: "string",
		default: "",
		description: "Highlight ID, e.g. 17987606483520330 (also accepts highlight:17987606483520330), or a highlight URL like https://www.instagram.com/stories/highlights/17987606483520330/",
		routing: {
			send: {
				type: "query",
				property: "highlight_id",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["instagram"],
				operation: ["highlightStories"],
			},
		},
	},
];
