// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import {
	NodeConnectionTypes,
	type INodePropertyOptions,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { twitterDescription } from './resources/twitter';
import { facebookDescription } from './resources/facebook';
import { redditDescription } from './resources/reddit';
import { youtubeDescription } from './resources/youtube';
import { instagramDescription } from './resources/instagram';
import { threadsDescription } from './resources/threads';
import { truthsocialDescription } from './resources/truthsocial';
import { tiktokDescription } from './resources/tiktok';
import { amazonDescription } from './resources/amazon';
import { trustpilotDescription } from './resources/trustpilot';
import { googleDescription } from './resources/google';

// Platform names, including brand names like Threads that read as plurals
const resourceOptions: INodePropertyOptions[] = [
	{ name: "Amazon", value: "amazon" },
	{ name: "Facebook", value: "facebook" },
	{ name: "Google", value: "google" },
	{ name: "Instagram", value: "instagram" },
	{ name: "Reddit", value: "reddit" },
	{ name: "Threads", value: "threads" },
	{ name: "TikTok", value: "tiktok" },
	{ name: "Trustpilot", value: "trustpilot" },
	{ name: "Truth Social", value: "truthsocial" },
	{ name: "Twitter", value: "twitter" },
	{ name: "YouTube", value: "youtube" },
];

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
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: resourceOptions,
				default: 'twitter',
			},
			...twitterDescription,
			...facebookDescription,
			...redditDescription,
			...youtubeDescription,
			...instagramDescription,
			...threadsDescription,
			...truthsocialDescription,
			...tiktokDescription,
			...amazonDescription,
			...trustpilotDescription,
			...googleDescription,
		],
	};
}
