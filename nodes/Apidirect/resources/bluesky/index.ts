// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { blueskyPostCommentsFields } from './postComments';
import { blueskyPostFields } from './post';
import { blueskyPostLikesFields } from './postLikes';
import { blueskyPostQuotesFields } from './postQuotes';
import { blueskyPostRepostsFields } from './postReposts';
import { blueskyPostsFields } from './posts';
import { blueskyUsersFields } from './users';
import { blueskyUserFollowersFields } from './userFollowers';
import { blueskyUserFollowingFields } from './userFollowing';
import { blueskyUserLikesFields } from './userLikes';
import { blueskyUserPostsFields } from './userPosts';
import { blueskyUserFields } from './user';

export const blueskyDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["bluesky"],
			},
		},
		options: [
			{
				name: "Post Comments",
				value: "postComments",
				action: "Get post comments",
				description: "Get the replies to a Bluesky post ($0.003 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/post/comments",
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
				name: "Post Details",
				value: "post",
				action: "Get post details",
				description: "Get a single Bluesky post by URL or ID ($0.003 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/post",
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
				name: "Post Likes",
				value: "postLikes",
				action: "Get post likes",
				description: "Get the users who liked a Bluesky post, newest first ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/post/likes",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "likes",
								},
							},
						],
					},
				},
			},
			{
				name: "Post Quotes",
				value: "postQuotes",
				action: "Get post quotes",
				description: "Get the posts that quote a Bluesky post, newest first ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/post/quotes",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "quotes",
								},
							},
						],
					},
				},
			},
			{
				name: "Post Reposts",
				value: "postReposts",
				action: "Get post reposts",
				description: "Get the users who reposted a Bluesky post, newest first ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/post/reposts",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "reposts",
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
				description: "Search Bluesky posts by keyword ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/posts",
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
				description: "Search Bluesky users by keyword ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/users",
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
				name: "User Followers",
				value: "userFollowers",
				action: "Get user followers",
				description: "Get the followers of a Bluesky user, newest first ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/user/followers",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "followers",
								},
							},
						],
					},
				},
			},
			{
				name: "User Following",
				value: "userFollowing",
				action: "Get user following",
				description: "Get the accounts a Bluesky user follows, newest first ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/user/following",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "following",
								},
							},
						],
					},
				},
			},
			{
				name: "User Likes",
				value: "userLikes",
				action: "Get user likes",
				description: "Get the posts a Bluesky user has liked, newest first ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/user/likes",
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
				name: "User Posts",
				value: "userPosts",
				action: "Get user posts",
				description: "Get a user's feed by handle: their posts, replies, and reposts in feed order (the pinned post first, then newest first), each flagged with is_reply, is_repost, and is_pinned ($0.003 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/user/posts",
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
				description: "Get a Bluesky user's full profile by handle, DID, or profile URL ($0.003 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/bluesky/user",
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
		default: "postComments",
	},
	...blueskyPostCommentsFields,
	...blueskyPostFields,
	...blueskyPostLikesFields,
	...blueskyPostQuotesFields,
	...blueskyPostRepostsFields,
	...blueskyPostsFields,
	...blueskyUsersFields,
	...blueskyUserFollowersFields,
	...blueskyUserFollowingFields,
	...blueskyUserLikesFields,
	...blueskyUserPostsFields,
	...blueskyUserFields,
];
