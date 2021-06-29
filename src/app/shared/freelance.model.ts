//Modélisation des freelances
export class Freelance {
  public id: number;
  public picture: string;
  public firstname: string;
  public lastname: string;
  public profession: string;
  public note: number;
  public description: string;
  public f_amount: number;
  public category: string[];
  public softskills: string[];

  constructor(
    id: number,
    picture: string,
    firstname: string,
    lastname: string,
    profession: string,
    note: number,
    description: string,
    f_amount: number,
    category: string[],
    softskills: string[]
  ) {
    this.id = id;
    this.picture = picture;
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;
    this.note = note;
    this.description = description;
    this.f_amount = f_amount;
    this.category = category;
    this.softskills = softskills;
  }
}
