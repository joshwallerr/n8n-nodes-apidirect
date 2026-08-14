// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { truthsocialUserPostsFields } from './userPosts';

export const truthsocialDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["truthsocial"],
			},
		},
		options: [
			{
				name: "User Posts",
				value: "userPosts",
				action: "Get user posts",
				description: "Get a user's recent posts (their feed) by username ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/truthsocial/user/posts",
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
		],
		default: "userPosts",
	},
	...truthsocialUserPostsFields,
];
