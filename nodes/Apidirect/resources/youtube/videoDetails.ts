// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const youtubeVideoDetailsFields: INodeProperties[] = [
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "YouTube video URL (watch?v=, youtu.be/, /shorts/, /embed/ or /live/ forms) or 11-character video ID",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["youtube"],
				operation: ["videoDetails"],
			},
		},
	},
];
