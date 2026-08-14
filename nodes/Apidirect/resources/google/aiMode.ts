// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googleAiModeFields: INodeProperties[] = [
	{
		displayName: "Prompt",
		name: "prompt",
		type: "string",
		default: "",
		description: "The AI Mode prompt (max 12000 characters)",
		routing: {
			send: {
				type: "body",
				property: "prompt",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["google"],
				operation: ["aiMode"],
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
				resource: ["google"],
				operation: ["aiMode"],
			},
		},
		options: [
			{
				displayName: "Country",
				name: "country",
				type: "string",
				default: "us",
				description: "2-letter country code (default: \"us\")",
				routing: {
					send: {
						type: "body",
						property: "country",
					},
				},
			},
			{
				displayName: "Language",
				name: "language",
				type: "string",
				default: "en",
				description: "2-letter language code (default: \"en\")",
				routing: {
					send: {
						type: "body",
						property: "language",
					},
				},
			},
			{
				displayName: "Session Token",
				name: "sessionToken",
				type: "string",
				typeOptions: {
					password: true,
				},
				default: "",
				description: "Token from a prior response to continue the conversation",
				routing: {
					send: {
						type: "body",
						property: "session_token",
					},
				},
			},
		],
	},
];
