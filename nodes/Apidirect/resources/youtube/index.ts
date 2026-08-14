// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { youtubeChannelDetailsFields } from './channelDetails';
import { youtubeChannelsFields } from './channels';
import { youtubeVideosFields } from './videos';
import { youtubeCommentsFields } from './comments';
import { youtubeVideoDetailsFields } from './videoDetails';

export const youtubeDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["youtube"],
			},
		},
		options: [
			{
				name: "Channel Details",
				value: "channelDetails",
				action: "Get channel details",
				description: "Get detailed information about a YouTube channel by channel ID, URL, or name/handle ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/youtube/channel",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "channel",
								},
							},
						],
					},
				},
			},
			{
				name: "Search Channels",
				value: "channels",
				action: "Search channels",
				description: "Search YouTube channels by keyword ($0.005 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/youtube/channels",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "channels",
								},
							},
						],
					},
				},
			},
			{
				name: "Search Videos",
				value: "videos",
				action: "Search videos",
				description: "Search YouTube videos by keyword ($0.005 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/youtube/posts",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "posts",
								},
							},
						],
					},
				},
			},
			{
				name: "Video Comments",
				value: "comments",
				action: "Get video comments",
				description: "Get comments from any YouTube video by URL ($0.005 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/youtube/comments",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "comments",
								},
							},
						],
					},
				},
			},
			{
				name: "Video Details",
				value: "videoDetails",
				action: "Get video details",
				description: "Get detailed information about a YouTube video by URL or video ID ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/youtube/video",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "video",
								},
							},
						],
					},
				},
			},
		],
		default: "channelDetails",
	},
	...youtubeChannelDetailsFields,
	...youtubeChannelsFields,
	...youtubeVideosFields,
	...youtubeCommentsFields,
	...youtubeVideoDetailsFields,
];
