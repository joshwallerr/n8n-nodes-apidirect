// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { googleAiModeFields } from './aiMode';
import { googleForumPostsFields } from './forumPosts';
import { googleNewsArticlesFields } from './newsArticles';
import { googlePlacesDetailsFields } from './placesDetails';
import { googlePlacesPhotosFields } from './placesPhotos';
import { googlePlacesReviewsFields } from './placesReviews';
import { googlePlacesSearchFields } from './placesSearch';
import { googleWebSearchFields } from './webSearch';

export const googleDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["google"],
			},
		},
		options: [
			{
				name: "AI Mode",
				value: "aiMode",
				action: "Ask AI mode",
				description: "Send a prompt to Google's AI Mode and get a structured conversational reply with citation links ($0.005 per request)",
				routing: {
					request: {
						method: "POST",
						url: "/web/ai-mode",
					},
				},
			},
			{
				name: "Forum Posts",
				value: "forumPosts",
				action: "Search forum posts",
				description: "Search forum posts across the web including discussion boards, Q&A sites, and community forums ($0.008 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/forums/posts",
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
				name: "News Articles",
				value: "newsArticles",
				action: "Search news articles",
				description: "Search news articles from thousands of sources worldwide ($0.008 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/news/articles",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "articles",
								},
							},
						],
					},
				},
			},
			{
				name: "Place Details",
				value: "placesDetails",
				action: "Get place details",
				description: "Get full details for a Google Maps place by place_id ($0.003 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/places/details",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "place",
								},
							},
						],
					},
				},
			},
			{
				name: "Place Photos",
				value: "placesPhotos",
				action: "Get place photos",
				description: "Get photos and videos for a Google Maps place by place_id ($0.01 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/places/photos",
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
				name: "Place Reviews",
				value: "placesReviews",
				action: "Get place reviews",
				description: "Get user reviews for a Google Maps place by place_id ($0.01 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/places/reviews",
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
				name: "Places Search",
				value: "placesSearch",
				action: "Search places",
				description: "Search Google Maps places — local businesses, restaurants, hotels, shops and points of interest — by free-text query ($0.01 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/places/search",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "places",
								},
							},
						],
					},
				},
			},
			{
				name: "Web Search",
				value: "webSearch",
				action: "Search the web",
				description: "Real-time Google organic search results ($0.004 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/web/search",
					},
				},
			},
		],
		default: "aiMode",
	},
	...googleAiModeFields,
	...googleForumPostsFields,
	...googleNewsArticlesFields,
	...googlePlacesDetailsFields,
	...googlePlacesPhotosFields,
	...googlePlacesReviewsFields,
	...googlePlacesSearchFields,
	...googleWebSearchFields,
];
