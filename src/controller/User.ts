export default class User {
  constructor(name: string, favouriteTeams: string[]) {
    this._name = name;
    this._favouriteTeams = favouriteTeams;
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
}
