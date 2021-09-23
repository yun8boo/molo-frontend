export class CurrentUser {
  private $id: number;
  private $email: string;
  private $name: string;

  constructor(id: number, email: string, name: string) {
    this.$id = id;
    this.$email = email;
    this.$name = name;
  }

  public get id(): number {
    return this.$id;
  }

  public get email(): string {
    return this.$email;
  }

  public get name(): string {
    return this.$name;
  }
}
