// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const twitterTrendsFields: INodeProperties[] = [
	{
		displayName: "WOEID",
		name: "woeid",
		type: "number",
		default: 0,
		description: "Where On Earth ID for the location. Use 1 for Worldwide.",
		routing: {
			send: {
				type: "query",
				property: "woeid",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["twitter"],
				operation: ["trends"],
			},
		},
	},
];
