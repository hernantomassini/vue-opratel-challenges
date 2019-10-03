export default class User {

  public email: string | undefined;
  public lastname: string | undefined;
  public name: string | undefined;
  public phone: string | undefined;
  // tslint:disable-next-line: variable-name
  public _id: string | undefined;
  // tslint:disable-next-line: variable-name
  public __v: string | undefined;

  constructor(email?: string, lastname?: string, name?: string, phone?: string) {
    this.email = email;
    this.lastname = lastname;
    this.name = name;
    this.phone = phone;
  }
}
