export class UserProfileModel {

  id?: string;
  email!: string;
  role!: string;

  isFinishedTutorial!: boolean;

  userAvatarUrl?: string;

  url?: string;

  avatarUrl?: string;
  public constructor(init?: Partial<UserProfileModel>) {
    Object.assign(this, init);
  }
}
