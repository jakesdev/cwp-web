
export class UserInfoModel {
  id!: string;
  email!: string;
  createdAt!: string;
  public constructor(init?: Partial<UserInfoModel>) {
    Object.assign(this, init);
  }
}

// export interface ISubscription {
//   id: string;
//   createdAt: string;
//   updatedAt: string;
//   status: string;
//   productId: string;
//   transactionDate: Date;
//   verificationData: string;
//   expDate: Date;
// }


// export interface Geography {
//   city: string;
//   country: string;
//   region: string;
//   timezone: string;
// }
