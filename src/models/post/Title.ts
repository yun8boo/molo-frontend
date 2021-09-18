export class Title {
  private $value: string;

  constructor(value: string) {
    this.$value = value;
  }

  public get title(): string {
    return this.$value;
  }
}
