export class UserProfileModel {

  id?: string;
  email!: string;
  role!: string;

  public constructor(init?: Partial<UserProfileModel>) {
    Object.assign(this, init);
  }
}
