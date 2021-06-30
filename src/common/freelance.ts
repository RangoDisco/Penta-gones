export class Freelance{
    public picture:string;
    public firstname:string;
    public lastname:string;
    public profession:string;
    public note:number;
    public description:string;
    public f_amount:number;

constructor(picture:string,
            firstname:string,
            lastname:string,
            profession:string,
            note:number,
            description:string,
            f_amount:number){
             
    this.picture = picture;
    this.firstname = firstname;
    this.lastname = lastname;
    this.profession = profession;
    this.note = note;
    this.description = description;
    this.f_amount = f_amount;

    } 
}