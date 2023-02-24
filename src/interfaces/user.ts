export interface IUser {
  email: string;
  password: string;
  passwordConfirm?: string;
  // name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  sex: string;
  loan: string;
  credit: string;
  interest: string;
  job: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IPassword {
  password: string;
}
