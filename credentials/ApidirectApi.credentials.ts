import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	INodeProperties,
} from 'n8n-workflow';

export class ApidirectApi implements ICredentialType {
	name = 'apidirectApi';

	displayName = 'API Direct API';

	icon: Icon = { light: 'file:apidirect.svg', dark: 'file:apidirect.dark.svg' };

	documentationUrl = 'https://apidirect.io/docs/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
			description:
				'Your API Direct key (starts with ak_live_). Create one at https://apidirect.io/dashboard/keys',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-Key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://apidirect.io/v1',
			url: '/time',
		},
	};
}
