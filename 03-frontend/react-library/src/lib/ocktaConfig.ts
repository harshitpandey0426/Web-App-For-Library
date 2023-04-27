export const oktaConfig = {
    clientId: '0oa9a6sjecR0fizaR5d7',
    issuer: 'https://dev-82696134.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}