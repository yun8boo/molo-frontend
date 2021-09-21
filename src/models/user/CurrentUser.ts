export class CurrentUser {
  private $accessToken: string;
  private $id: number;
  private $email: string;
  private $name: string;

  constructor(accessToken: string, id: number, email: string, name: string) {
    this.$accessToken = accessToken;
    this.$id = id;
    this.$email = email;
    this.$name = name;
  }

  public get accessToken(): string {
    return this.$accessToken;
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
