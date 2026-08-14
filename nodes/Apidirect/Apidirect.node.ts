// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { twitterDescription } from './resources/twitter';
import { facebookDescription } from './resources/facebook';
import { redditDescription } from './resources/reddit';
import { youtubeDescription } from './resources/youtube';
import { instagramDescription } from './resources/instagram';
import { threadsDescription } from './resources/threads';
import { truthsocialDescription } from './resources/truthsocial';
import { tiktokDescription } from './resources/tiktok';
import { googleDescription } from './resources/google';

export class Apidirect implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'API Direct',
		name: 'apidirect',
		icon: { light: 'file:apidirect.svg', dark: 'file:apidirect.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Search and monitor social media, news, and the web via the API Direct social listening API',
		defaults: {
			name: 'API Direct',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'apidirectApi', required: true }],
		requestDefaults: {
			baseURL: 'https://apidirect.io/v1',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: "Resource",
				name: "resource",
				type: "options",
				noDataExpression: true,
				options: [
					{
						name: "Facebook",
						value: "facebook",
					},
					{
						name: "Google",
						value: "google",
					},
					{
						name: "Instagram",
						value: "instagram",
					},
					{
						name: "Reddit",
						value: "reddit",
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: "Threads",
						value: "threads",
					},
					{
						name: "TikTok",
						value: "tiktok",
					},
					{
						name: "Truth Social",
						value: "truthsocial",
					},
					{
						name: "Twitter",
						value: "twitter",
					},
					{
						name: "YouTube",
						value: "youtube",
					},
				],
				default: "twitter",
			},
			...twitterDescription,
			...facebookDescription,
			...redditDescription,
			...youtubeDescription,
			...instagramDescription,
			...threadsDescription,
			...truthsocialDescription,
			...tiktokDescription,
			...googleDescription,
		],
	};
}
