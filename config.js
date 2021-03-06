import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'https://www.financial.org/' : 'http://localhost:5000/api' ;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const APP_LOGO = publicRuntimeConfig.APP_LOGO;