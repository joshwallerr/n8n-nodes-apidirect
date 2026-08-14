// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { instagramPostFields } from './post';
import { instagramPostsFields } from './posts';
import { instagramUsersFields } from './users';
import { instagramUserPostsFields } from './userPosts';
import { instagramUserFields } from './user';

export const instagramDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["instagram"],
			},
		},
		options: [
			{
				name: "Post Details",
				value: "post",
				action: "Get post details",
				description: "Get full details for a single Instagram post, reel, or IGTV video by URL or shortcode ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/post",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "post",
								},
							},
						],
					},
				},
			},
			{
				name: "Search Posts",
				value: "posts",
				action: "Search posts",
				description: "Search Instagram posts by keyword ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/posts",
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
				name: "Search Users",
				value: "users",
				action: "Search users",
				description: "Search Instagram users by keyword ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/users",
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
				name: "User Posts",
				value: "userPosts",
				action: "Get user posts",
				description: "Get a user's recent posts and reels (their feed) by profile URL or username ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/user/posts",
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
				name: "User Profile",
				value: "user",
				action: "Get user profile",
				description: "Get the full profile for a single Instagram user by username or profile URL ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/user",
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
		],
		default: "post",
	},
	...instagramPostFields,
	...instagramPostsFields,
	...instagramUsersFields,
	...instagramUserPostsFields,
	...instagramUserFields,
];
