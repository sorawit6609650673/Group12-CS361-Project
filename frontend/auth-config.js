// Configure these values from your Amazon Cognito User Pool app client before deployment.
// Use an app client WITHOUT a client secret (public SPA client).
export const COGNITO_CONFIG = {
  domain: 'us-east-1y4bmjxnty.auth.us-east-1.amazoncognito.com',
  clientId: '1ld6lho7fk19dm7mda19mm9auf',
  redirectUri: `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}login.html`,
  logoutUri: `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}login.html`,
  scopes: ['openid', 'email', 'phone']
};
