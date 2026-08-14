// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const facebookGroupDetailsFields: INodeProperties[] = [
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Facebook group URL",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["facebook"],
				operation: ["groupDetails"],
			},
		},
	},
];
