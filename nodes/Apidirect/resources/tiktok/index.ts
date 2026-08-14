// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { tiktokUsersFields } from './users';
import { tiktokVideosFields } from './videos';
import { tiktokUserFields } from './user';
import { tiktokVideoFields } from './video';

export const tiktokDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["tiktok"],
			},
		},
		options: [
			{
				name: "Search Users",
				value: "users",
				action: "Search users",
				description: "Search TikTok users by keyword ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/tiktok/users",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "users",
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
				description: "Search TikTok videos by keyword ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/tiktok/videos",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "videos",
								},
							},
						],
					},
				},
			},
			{
				name: "User Profile",
				value: "user",
				action: "Get user profile",
				description: "Get the full profile for a single TikTok user by username, user ID, or profile URL ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/tiktok/user",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "user",
								},
							},
						],
					},
				},
			},
			{
				name: "Video Details",
				value: "video",
				action: "Get video details",
				description: "Get full details for a single TikTok video by URL or video ID ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/tiktok/video",
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
		default: "users",
	},
	...tiktokUsersFields,
	...tiktokVideosFields,
	...tiktokUserFields,
	...tiktokVideoFields,
];
