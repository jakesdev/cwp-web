export class PageModel {

  _id!: string;
  url!: string;
  title!: string;

  userId!: string;

  components?: any[];

  public constructor(init?: Partial<PageModel>) {
    Object.assign(this, init);
  }
}
