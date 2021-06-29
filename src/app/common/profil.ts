export class Profil {
    public photo:String;
    public username: String;
    public job:String;
    public description: String;
    public rate:number;
    public backgroundImage:String;
    
    constructor(photo:String,username:String,job:String, description:String, rate:number, backgroundImage:String){
        this.photo = photo;
        this.username = username;
        this.job = job;
        this.description = description;
        this.rate = rate;
        this.backgroundImage = backgroundImage;
    }
}
