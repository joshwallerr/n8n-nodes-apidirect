// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { redditCommentsFields } from './comments';
import { redditPostsFields } from './posts';
import { redditUsersFields } from './users';

export const redditDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["reddit"],
			},
		},
		options: [
			{
				name: "Search Comments",
				value: "comments",
				action: "Search comments",
				description: "Search Reddit comments by keyword ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/reddit/comments",
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
				name: "Search Posts",
				value: "posts",
				action: "Search posts",
				description: "Search Reddit posts by keyword ($0.003 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/reddit/posts",
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
				description: "Search Reddit users by keyword ($0.003 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/reddit/users",
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
		],
		default: "comments",
	},
	...redditCommentsFields,
	...redditPostsFields,
	...redditUsersFields,
];
