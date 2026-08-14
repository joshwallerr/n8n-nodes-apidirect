// This file is auto-generated from the API Direct endpoint catalog.
// Do not edit by hand.
import type { INodeProperties } from 'n8n-workflow';

export const googlePlacesSearchFields: INodeProperties[] = [
	{
		displayName: "Query",
		name: "query",
		type: "string",
		default: "",
		description: "Search keyword, e.g. \"coffee shops brooklyn\" (max 500 characters)",
		routing: {
			send: {
				type: "query",
				property: "query",
			},
		},
		required: true,
		displayOptions: {
			show: {
				resource: ["google"],
				operation: ["placesSearch"],
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
				resource: ["google"],
				operation: ["placesSearch"],
			},
		},
		options: [
			{
				displayName: "Country",
				name: "country",
				type: "string",
				default: "us",
				description: "2-letter country code (default: \"us\")",
				routing: {
					send: {
						type: "query",
						property: "country",
					},
				},
			},
			{
				displayName: "Language",
				name: "language",
				type: "string",
				default: "en",
				description: "2-letter language code (default: \"en\")",
				routing: {
					send: {
						type: "query",
						property: "language",
					},
				},
			},
			{
				displayName: "Latitude",
				name: "lat",
				type: "number",
				default: 0,
				description: "Center latitude for geographic bias (use with lng)",
				routing: {
					send: {
						type: "query",
						property: "lat",
					},
				},
			},
			{
				displayName: "Longitude",
				name: "lng",
				type: "number",
				default: 0,
				description: "Center longitude for geographic bias (use with lat)",
				routing: {
					send: {
						type: "query",
						property: "lng",
					},
				},
			},
			{
				displayName: "Pages",
				name: "pages",
				type: "number",
				default: 1,
				description: "Number of pages, 1-20 (default: 1). Each page returns up to 10 results and is billed as one request.",
				routing: {
					send: {
						type: "query",
						property: "pages",
					},
				},
			},
			{
				displayName: "Zoom",
				name: "zoom",
				type: "number",
				default: 13,
				description: "Map zoom level 1-20 (default: 13). Smaller widens radius.",
				routing: {
					send: {
						type: "query",
						property: "zoom",
					},
				},
			},
		],
	},
];
