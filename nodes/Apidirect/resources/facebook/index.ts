// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { facebookGroupDetailsFields } from './groupDetails';
import { facebookGroupPostsFields } from './groupPosts';
import { facebookGroupSearchFields } from './groupSearch';
import { facebookPageDetailsFields } from './pageDetails';
import { facebookPagePhotosFields } from './pagePhotos';
import { facebookPagePostsFields } from './pagePosts';
import { facebookPageReelsFields } from './pageReels';
import { facebookPageReviewsFields } from './pageReviews';
import { facebookPageVideosFields } from './pageVideos';
import { facebookPostCommentsFields } from './postComments';
import { facebookSearchEventsFields } from './searchEvents';
import { facebookSearchLocationsFields } from './searchLocations';
import { facebookSearchPagesFields } from './searchPages';
import { facebookSearchPostsFields } from './searchPosts';
import { facebookSearchVideosFields } from './searchVideos';

export const facebookDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["facebook"],
			},
		},
		options: [
			{
				name: "Group Details",
				value: "groupDetails",
				action: "Get group details",
				description: "Get detailed information about a Facebook group by URL ($0.008 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/group",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "group",
								},
							},
						],
					},
				},
			},
			{
				name: "Group Posts",
				value: "groupPosts",
				action: "Get group posts",
				description: "Get posts from a public Facebook group by group ID ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/group/posts",
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
				name: "Group Posts Search",
				value: "groupSearch",
				action: "Search posts in a group",
				description: "Search posts within a specific Facebook group by keyword ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/group/search",
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
				name: "Page Details",
				value: "pageDetails",
				action: "Get page details",
				description: "Get detailed information about a Facebook page by URL ($0.008 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/page",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "page",
								},
							},
						],
					},
				},
			},
			{
				name: "Page Photos",
				value: "pagePhotos",
				action: "Get page photos",
				description: "Get photos from a Facebook page by page ID ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/page/photos",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "photos",
								},
							},
						],
					},
				},
			},
			{
				name: "Page Posts",
				value: "pagePosts",
				action: "Get page posts",
				description: "Get posts from a Facebook page by page ID ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/page/posts",
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
				name: "Page Reels",
				value: "pageReels",
				action: "Get page reels",
				description: "Get Reels from a Facebook page ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/page/reels",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "reels",
								},
							},
						],
					},
				},
			},
			{
				name: "Page Reviews",
				value: "pageReviews",
				action: "Get page reviews",
				description: "Get reviews for a Facebook page by page ID ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/page/reviews",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "reviews",
								},
							},
						],
					},
				},
			},
			{
				name: "Page Videos",
				value: "pageVideos",
				action: "Get page videos",
				description: "Get videos from a Facebook page ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/page/videos",
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
				name: "Post Comments",
				value: "postComments",
				action: "Get post comments",
				description: "Get comments on a Facebook post by post ID ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/post/comments",
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
				name: "Search Events",
				value: "searchEvents",
				action: "Search events",
				description: "Search Facebook events by keyword across all of Facebook ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/events",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "events",
								},
							},
						],
					},
				},
			},
			{
				name: "Search Locations",
				value: "searchLocations",
				action: "Search locations",
				description: "Resolve a place name (city, region, or country) to Facebook location IDs ($0.004 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/locations",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "results",
								},
							},
						],
					},
				},
			},
			{
				name: "Search Pages",
				value: "searchPages",
				action: "Search pages",
				description: "Search Facebook pages by keyword ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/pages",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "results",
								},
							},
						],
					},
				},
			},
			{
				name: "Search Posts",
				value: "searchPosts",
				action: "Search posts",
				description: "Search Facebook posts by keyword across all of Facebook ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/posts",
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
				name: "Search Videos",
				value: "searchVideos",
				action: "Search videos",
				description: "Search Facebook videos by keyword ($0.008 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/facebook/videos",
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
		],
		default: "groupDetails",
	},
	...facebookGroupDetailsFields,
	...facebookGroupPostsFields,
	...facebookGroupSearchFields,
	...facebookPageDetailsFields,
	...facebookPagePhotosFields,
	...facebookPagePostsFields,
	...facebookPageReelsFields,
	...facebookPageReviewsFields,
	...facebookPageVideosFields,
	...facebookPostCommentsFields,
	...facebookSearchEventsFields,
	...facebookSearchLocationsFields,
	...facebookSearchPagesFields,
	...facebookSearchPostsFields,
	...facebookSearchVideosFields,
];
