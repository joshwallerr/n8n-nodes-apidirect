// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const trustpilotCompanyReviewsFields: INodeProperties[] = [
	{
		displayName: "Domain",
		name: "domain",
		type: "string",
		default: "",
		description: "Company website domain (e.g. gossby.com) or its Trustpilot review-page URL",
		routing: {
			send: {
				type: "query",
				property: "domain",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["trustpilot"],
				operation: ["companyReviews"],
			},
		},
	},
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {
		},
		displayOptions: {
			show: {
				resource: ["trustpilot"],
				operation: ["companyReviews"],
			},
		},
		options: [
			{
				displayName: "Get Sentiment",
				name: "getSentiment",
				type: "boolean",
				default: false,
				description: "Whether to add AI emotion analysis (dominant emotion, polarity, intensity) to each result. Adds $0.001 per page.",
				routing: {
					send: {
						type: "query",
						property: "get_sentiment",
					},
				},
			},
			{
				displayName: "Language",
				name: "language",
				type: "string",
				default: "",
				description: "2-letter ISO 639-1 language code (default: all languages)",
				routing: {
					send: {
						type: "query",
						property: "language",
					},
				},
			},
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Pages to fetch, 1-10 (default: 1). Each page returns up to 20 reviews and is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
			{
				displayName: "Posted Ago",
				name: "postedAgo",
				type: "options",
				options: [
					{
						name: "12m",
						value: "12m",
					},
					{
						name: "30d",
						value: "30d",
					},
					{
						name: "3m",
						value: "3m",
					},
					{
						name: "6m",
						value: "6m",
					},
					{
						name: "Default",
						value: "",
					},
				],
				default: "",
				description: "Only reviews from this period",
				routing: {
					send: {
						type: "query",
						property: "posted_ago",
					},
				},
			},
			{
				displayName: "Query",
				name: "query",
				type: "string",
				default: "",
				description: "Only reviews matching this keyword",
				routing: {
					send: {
						type: "query",
						property: "query",
					},
				},
			},
			{
				displayName: "Rating",
				name: "rating",
				type: "string",
				default: "",
				description: "Only these star ratings, comma-separated 1-5 (e.g. '1,2')",
				routing: {
					send: {
						type: "query",
						property: "rating",
					},
				},
			},
			{
				displayName: "Sort By",
				name: "sortBy",
				type: "options",
				options: [
					{
						name: "Most Relevant",
						value: "most_relevant",
					},
					{
						name: "Newest",
						value: "newest",
					},
				],
				default: "most_relevant",
				description: "Sort order",
				routing: {
					send: {
						type: "query",
						property: "sort_by",
					},
				},
			},
			{
				displayName: "Verified",
				name: "verified",
				type: "boolean",
				default: false,
				description: "Whether to only verified reviews",
				routing: {
					send: {
						type: "query",
						property: "verified",
					},
				},
			},
			{
				displayName: "With Replies",
				name: "withReplies",
				type: "boolean",
				default: false,
				description: "Whether to only reviews the company replied to",
				routing: {
					send: {
						type: "query",
						property: "with_replies",
					},
				},
			},
		],
	},
];
