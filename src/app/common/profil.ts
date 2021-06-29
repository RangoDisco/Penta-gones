export class Profil {
  public username: String;
  public job: String;
  public softSkills: String[];
  public rate: string;
  public backgroundImage: String;

  constructor(
    username: String,
    job: String,
    softSkills: String[],
    rate: string,
    backgroundImage: String
  ) {
    this.username = username;
    this.job = job;
    this.softSkills = softSkills;
    this.rate = rate;
    this.backgroundImage = backgroundImage;
  }
}
