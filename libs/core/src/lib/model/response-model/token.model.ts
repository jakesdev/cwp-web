export class TokenModel {

  accessToken!: string;
  refreshToken!: string;
  expiresIn!: number;

  public constructor(init?: Partial<TokenModel>) {
    Object.assign(this, init);
  }
}
