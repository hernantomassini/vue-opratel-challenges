export default class User {

  public email: string;
  public lastname: string;
  public name: string;
  public phone: string;
  // tslint:disable-next-line: variable-name
  public _id: string | undefined;

  constructor(email: string, lastname: string, name: string, phone: string) {
    this.email = email;
    this.lastname = lastname;
    this.name = name;
    this.phone = phone;
  }
}
