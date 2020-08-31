import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

interface IAppData {
  user: {
    name: string;
    favouriteTeams: string[];
  };
}

export default class AppData {
  private readonly APP_ID = 'sopranos-app';

  // Using the singleton pattern
  private static instance: AppData;

  public static getInstance() {
    if (!AppData.instance) {
      AppData.instance = new AppData();
    }
    return AppData.instance;

  }
  constructor() {
      this.initAppData();
  }

  public isReady = false;

  /**
   * Either get data stored or store it fresh
   */
  private async initAppData() {
    const storedData = await this.getStoredData();
    if (storedData.value) {
      this.data = JSON.parse(storedData.value);
    } else {
      this.setStoredData();
    }
    this.isReady = true;
  }

  private data: IAppData = {
    user: {
      name: 'anonymous',
      favouriteTeams: [],
    },
  };
  public get appData() {
    return this.data;
  }

  private getStoredData() {
    return Storage.get({
      key: this.APP_ID,
    });
  }
  private setStoredData() {
    return Storage.set({
      key: this.APP_ID,
      value: JSON.stringify(this.data),
    });
  }
}
