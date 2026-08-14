// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const youtubeChannelDetailsFields: INodeProperties[] = [
	{
		displayName: "ID",
		name: "id",
		type: "string",
		default: "",
		description: "YouTube channel ID (24 characters, starts with UC). Provide exactly one of: ID, URL, Name.",
		routing: {
			send: {
				type: "query",
				property: "id",
			},
		},
		displayOptions: {
			show: {
				resource: ["youtube"],
				operation: ["channelDetails"],
			},
		},
	},
	{
		displayName: "URL",
		name: "url",
		type: "string",
		default: "",
		description: "Channel URL: youtube.com/channel/..., youtube.com/@handle, /c/ or /user/ forms. Provide exactly one of: ID, URL, Name.",
		routing: {
			send: {
				type: "query",
				property: "url",
			},
		},
		displayOptions: {
			show: {
				resource: ["youtube"],
				operation: ["channelDetails"],
			},
		},
	},
	{
		displayName: "Name",
		name: "name",
		type: "string",
		default: "",
		description: "Channel name or @handle (e.g. @mkbhd or Linus Tech Tips). Provide exactly one of: ID, URL, Name.",
		routing: {
			send: {
				type: "query",
				property: "name",
			},
		},
		displayOptions: {
			show: {
				resource: ["youtube"],
				operation: ["channelDetails"],
			},
		},
	},
];
