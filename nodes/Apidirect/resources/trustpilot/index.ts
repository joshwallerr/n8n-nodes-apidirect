// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { trustpilotCategoryCompaniesFields } from './categoryCompanies';
import { trustpilotCategoryFields } from './category';
import { trustpilotCategoryNewestFields } from './categoryNewest';
import { trustpilotCategoriesFields } from './categories';
import { trustpilotCompanyReviewsFields } from './companyReviews';
import { trustpilotCompaniesFields } from './companies';
import { trustpilotUserFields } from './user';

export const trustpilotDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["trustpilot"],
			},
		},
		options: [
			{
				name: "Category Companies",
				value: "categoryCompanies",
				action: "Get category companies",
				description: "List the companies in a Trustpilot category, ranked, 20 per page, along with the category's size and subcategories ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/category/companies",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "companies",
								},
							},
						],
					},
				},
			},
			{
				name: "Category Details",
				value: "category",
				action: "Get category details",
				description: "Get a Trustpilot category's display name, business count, parent, and subcategories ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/category",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "category",
								},
							},
						],
					},
				},
			},
			{
				name: "Category Newest",
				value: "categoryNewest",
				action: "Get category newest",
				description: "Get the newest companies added to a Trustpilot category — the short list shown on the category page, plus the category's size and subcategories ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/category/newest",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "companies",
								},
							},
						],
					},
				},
			},
			{
				name: "Category Search",
				value: "categories",
				action: "Get category search",
				description: "Search Trustpilot categories by keyword to find category IDs at any level of the taxonomy ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/categories",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "categories",
								},
							},
						],
					},
				},
			},
			{
				name: "Company Reviews",
				value: "companyReviews",
				action: "Get company reviews",
				description: "Get a company's Trustpilot reviews and full profile by website domain ($0.005 per page)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/company/reviews",
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
				name: "Company Search",
				value: "companies",
				action: "Get company search",
				description: "Search Trustpilot companies by name or keyword ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/companies",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "companies",
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
				description: "Get a Trustpilot reviewer's public profile and the reviews they have written across all companies, 20 per page ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/trustpilot/user",
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
		],
		default: "categoryCompanies",
	},
	...trustpilotCategoryCompaniesFields,
	...trustpilotCategoryFields,
	...trustpilotCategoryNewestFields,
	...trustpilotCategoriesFields,
	...trustpilotCompanyReviewsFields,
	...trustpilotCompaniesFields,
	...trustpilotUserFields,
];
