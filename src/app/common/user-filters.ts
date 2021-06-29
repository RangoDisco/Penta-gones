export class UserFilters {
  public category: string;
  public softSkills: string[];
  public minRating: string;

  constructor(category: string, softSkills: string[], minRating: string) {
    this.category = category;
    this.softSkills = softSkills;
    this.minRating = minRating;
  }
}
