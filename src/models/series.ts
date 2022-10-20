export class Series {
  watched: boolean;
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public score: number,
    public emmies: number
  ) {
    this.watched = false;
  }
}
