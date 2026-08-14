// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { twitterPostsFields } from './posts';
import { twitterUsersFields } from './users';
import { twitterTrendsFields } from './trends';
import { twitterTweetCommentsFields } from './tweetComments';
import { twitterTweetFields } from './tweet';
import { twitterTweetQuotesFields } from './tweetQuotes';
import { twitterTweetRetweetsFields } from './tweetRetweets';
import { twitterUserFollowersFields } from './userFollowers';
import { twitterUserFollowingFields } from './userFollowing';
import { twitterUserFields } from './user';
import { twitterUserRepliesFields } from './userReplies';
import { twitterUserTweetsFields } from './userTweets';
import { twitterUserVerifiedFollowersFields } from './userVerifiedFollowers';

export const twitterDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["twitter"],
			},
		},
		options: [
			{
				name: "Search Posts",
				value: "posts",
				action: "Search posts",
				description: "Search Twitter/X posts by keyword ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/posts",
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
				description: "Search Twitter/X users by keyword ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/users",
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
				name: "Trends",
				value: "trends",
				action: "Get trends",
				description: "Get the current trending topics for a specific location on Twitter/X ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/trends",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "trends",
								},
							},
						],
					},
				},
			},
			{
				name: "Tweet Comments",
				value: "tweetComments",
				action: "Get tweet comments",
				description: "Get the comments (replies) on a specific tweet ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/tweet/comments",
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
				name: "Tweet Details",
				value: "tweet",
				action: "Get tweet details",
				description: "Get detailed information for a single tweet by its ID ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/tweet",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "tweet",
								},
							},
						],
					},
				},
			},
			{
				name: "Tweet Quotes",
				value: "tweetQuotes",
				action: "Get tweet quotes",
				description: "Get the quote tweets for a specific tweet ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/tweet/quotes",
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
				name: "Tweet Retweets",
				value: "tweetRetweets",
				action: "Get tweet retweets",
				description: "Get the users who retweeted a specific tweet ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/tweet/retweets",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "retweets",
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
				description: "Get the followers of a specific Twitter/X user ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/user/followers",
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
				description: "Get the accounts that a specific Twitter/X user is following ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/user/following",
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
				name: "User Profile",
				value: "user",
				action: "Get user profile",
				description: "Get detailed profile information for a Twitter/X user by username ($0.006 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/user",
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
				name: "User Replies",
				value: "userReplies",
				action: "Get user replies",
				description: "Get replies posted by a specific Twitter/X user ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/user/replies",
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
				name: "User Tweets",
				value: "userTweets",
				action: "Get user tweets",
				description: "Get tweets posted by a specific Twitter/X user ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/user/tweets",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "tweets",
								},
							},
						],
					},
				},
			},
			{
				name: "Verified Followers",
				value: "userVerifiedFollowers",
				action: "Get verified followers",
				description: "Get the verified (blue checkmark) followers of a specific Twitter/X user ($0.006 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/twitter/user/verified-followers",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "verified_followers",
								},
							},
						],
					},
				},
			},
		],
		default: "posts",
	},
	...twitterPostsFields,
	...twitterUsersFields,
	...twitterTrendsFields,
	...twitterTweetCommentsFields,
	...twitterTweetFields,
	...twitterTweetQuotesFields,
	...twitterTweetRetweetsFields,
	...twitterUserFollowersFields,
	...twitterUserFollowingFields,
	...twitterUserFields,
	...twitterUserRepliesFields,
	...twitterUserTweetsFields,
	...twitterUserVerifiedFollowersFields,
];
