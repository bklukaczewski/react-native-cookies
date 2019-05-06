declare module 'react-native-cookies' {
  export default class CookieManager {
    static set(cookie: any, webKitSupport?: boolean): Promise<any>;

    static setFromResponse(name: string, response: string): Promise<any>;

    static get(name: string, webKitSupport?: boolean): Promise<any>;

    static getAll(webKitSupport?: boolean): Promise<any>;

    static clearByName(name: string): Promise<any>;

    static clearAll(webKitSupport?: boolean): Promise<any>;

  }
}
