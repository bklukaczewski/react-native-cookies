declare module 'react-native-cookies' {
  export default class CookieManager {
    static set(cookie: any): Promise<any>;

    static setFromResponse(name: string, response: string): Promise<any>;

    static get(name: string): Promise<any>;

    static getAll(): Promise<any>;

    static clearByName(name: string): Promise<any>;

    static clearAll(): Promise<any>;

  }
}
