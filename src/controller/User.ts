export interface IUser {
  name: string;
  favouriteTeams: string[];
}

export default class User {
  constructor(user: IUser) {
    this._name = user.name;
    this._favouriteTeams = user.favouriteTeams;
  }

  private _name: string;
  private _favouriteTeams: string[] = [];

  public get name() {
    return this._name;
  }

  public set name(name) {
    this._name = name;
  }

  public get favouriteTeams() {
    return this._favouriteTeams;
  }

  public set favouriteTeams(teams: string[]) {
    this._favouriteTeams = teams;
  }

  toJSON() {
    return {
      __type: 'User',
      name: this._name,
      favouriteTeams: this.favouriteTeams,
    };
  }
}
