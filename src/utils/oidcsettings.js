import getUrl from './routeUtils';

const Oidcsettings = {
  authority: 'https://sso.geops.io/openid',
  client_id: process.env.GATSBY_REGION === 'ch' ? '576922' : '991094',
  redirect_uri: getUrl('/signin'),
  post_logout_redirect_uri: getUrl('/signout'),
  silent_redirect_uri: getUrl('/silent'),
  response_type: 'id_token token',
  scope: 'openid profile email roles',
  filterProtocolClaims: true,
  automaticSilentRenew: false,
  loadUserInfo: true,
};

export default Oidcsettings;
