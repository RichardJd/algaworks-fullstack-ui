export const environment = {
  production: true,
  apiUrl: 'https://algamoney-fs-api.herokuapp.com',

  tokenWhiteListDomains: [ new RegExp('algamoney-fs-api.herokuapp.com') ],
  tokenBlackListDomains: [ new RegExp('\/oauth\/token') ]
};
