import { Plugins } from '@capacitor/core';
import User from './User';
const { Storage } = Plugins;

interface IAppData {
  user: User;
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
      const parsedData = JSON.parse(storedData.value);
      this._data = {
        ...parsedData,
        user: new User(parsedData.user)
      }
    } else {
      this.setStoredData();
    }
    this.isReady = true;
  }

  private _data: IAppData = {
    user: new User({name:'anonymous', favouriteTeams:[]}),
  };
  public get data() {
    return this._data;
  }

  public get user() {
    return this._data.user;
  }
  private getStoredData() {
    return Storage.get({
      key: this.APP_ID,
    });
  }
  private setStoredData() {
    return Storage.set({
      key: this.APP_ID,
      value: JSON.stringify(this._data),
    });
  }
}
