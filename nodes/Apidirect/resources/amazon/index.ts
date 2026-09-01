// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';
import { amazonBestSellersFields } from './bestSellers';
import { amazonProductDetailsFields } from './productDetails';
import { amazonProductsFields } from './products';
import { amazonSellerProductsFields } from './sellerProducts';
import { amazonSellerProfileFields } from './sellerProfile';
import { amazonSellerReviewsFields } from './sellerReviews';

export const amazonDescription: INodeProperties[] = [
	{
		displayName: "Operation",
		name: "operation",
		type: "options",
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ["amazon"],
			},
		},
		options: [
			{
				name: "Best Sellers",
				value: "bestSellers",
				action: "Get best sellers",
				description: "Get Amazon best-seller rankings for any category — Best Sellers, New Releases, Movers & Shakers, Most Wished For, or Gift Ideas ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/amazon/best-sellers",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "products",
								},
							},
						],
					},
				},
			},
			{
				name: "Product Details",
				value: "productDetails",
				action: "Get product details",
				description: "Get full details for an Amazon product by ASIN ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/amazon/product",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "product",
								},
							},
						],
					},
				},
			},
			{
				name: "Product Search",
				value: "products",
				action: "Get product search",
				description: "Search Amazon products by keyword across 24 marketplaces ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/amazon/products",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "products",
								},
							},
						],
					},
				},
			},
			{
				name: "Seller Products",
				value: "sellerProducts",
				action: "Get seller products",
				description: "Get the catalog of products sold by an Amazon seller by seller ID ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/amazon/seller/products",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "products",
								},
							},
						],
					},
				},
			},
			{
				name: "Seller Profile",
				value: "sellerProfile",
				action: "Get seller profile",
				description: "Get an Amazon seller's profile by seller ID ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/amazon/seller",
					},
					output: {
						postReceive: [
							{
								type: "rootProperty",
								properties: {
									property: "seller",
								},
							},
						],
					},
				},
			},
			{
				name: "Seller Reviews",
				value: "sellerReviews",
				action: "Get seller reviews",
				description: "Get customer feedback for an Amazon seller by seller ID ($0.005 per request)",
				routing: {
					request: {
						method: "GET",
						url: "/amazon/seller/reviews",
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
		default: "bestSellers",
	},
	...amazonBestSellersFields,
	...amazonProductDetailsFields,
	...amazonProductsFields,
	...amazonSellerProductsFields,
	...amazonSellerProfileFields,
	...amazonSellerReviewsFields,
];
