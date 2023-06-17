export class PageModel {

  _id!: string;
  url!: string;
  title!: string;

  userId!: string;

  public constructor(init?: Partial<PageModel>) {
    Object.assign(this, init);
  }
}
