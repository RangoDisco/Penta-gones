//Modélisation des freelances
export class Freelance {
  public id: number;
  public firstname: string;
  public lastname: string;
  public profession: string;
  public description: string;
  public f_amount: number;
  public softskills: string[];

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    profession: string,
    description: string,
    f_amount: number,
    softskills: string[]
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;
    this.description = description;
    this.f_amount = f_amount;
    this.softskills = softskills;
  }
}
