// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { instagramCommentRepliesFields } from './commentReplies';
import { instagramHashtagPostsFields } from './hashtagPosts';
import { instagramHighlightStoriesFields } from './highlightStories';
import { instagramPostCommentsFields } from './postComments';
import { instagramPostFields } from './post';
import { instagramPostLikesFields } from './postLikes';
import { instagramPostsFields } from './posts';
import { instagramUsersFields } from './users';
import { instagramUserFollowersFields } from './userFollowers';
import { instagramUserFollowingFields } from './userFollowing';
import { instagramUserHighlightsFields } from './userHighlights';
import { instagramUserPostsFields } from './userPosts';
import { instagramUserFields } from './user';
import { instagramUserStoriesFields } from './userStories';

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
				name: "Comment Replies",
				value: "commentReplies",
				action: "Get comment replies",
				description: "Get the replies to a single Instagram comment by post URL or shortcode plus the comment ID from the Post Comments endpoint ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/comment/replies",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "replies",
								},
							},
						],
					},
				},
			},
			{
				name: "Hashtag Posts",
				value: "hashtagPosts",
				action: "Get hashtag posts",
				description: "Get posts and reels for any Instagram hashtag ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/hashtag/posts",
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
				name: "Highlight Stories",
				value: "highlightStories",
				action: "Get highlight stories",
				description: "Get the stories saved in a single Instagram highlight by highlight ID (from the User Highlights endpoint) or highlight URL ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/highlight/stories",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "stories",
								},
							},
						],
					},
				},
			},
			{
				name: "Post Comments",
				value: "postComments",
				action: "Get post comments",
				description: "Get the comments on an Instagram post or reel by URL or shortcode ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/post/comments",
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
				name: "Post Likes",
				value: "postLikes",
				action: "Get post likes",
				description: "Get the users who liked an Instagram post or reel by URL or shortcode ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/post/likes",
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
				name: "User Followers",
				value: "userFollowers",
				action: "Get user followers",
				description: "Get a user's followers by username or profile URL ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/user/followers",
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
				description: "Get the accounts a user follows by username or profile URL ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/user/following",
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
				name: "User Highlights",
				value: "userHighlights",
				action: "Get user highlights",
				description: "Get a user's story highlights by username or profile URL ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/user/highlights",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "highlights",
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
			{
				name: "User Stories",
				value: "userStories",
				action: "Get user stories",
				description: "Get a user's currently active stories by username or profile URL ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/instagram/user/stories",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "stories",
								},
							},
						],
					},
				},
			},
		],
		default: "commentReplies",
	},
	...instagramCommentRepliesFields,
	...instagramHashtagPostsFields,
	...instagramHighlightStoriesFields,
	...instagramPostCommentsFields,
	...instagramPostFields,
	...instagramPostLikesFields,
	...instagramPostsFields,
	...instagramUsersFields,
	...instagramUserFollowersFields,
	...instagramUserFollowingFields,
	...instagramUserHighlightsFields,
	...instagramUserPostsFields,
	...instagramUserFields,
	...instagramUserStoriesFields,
];
