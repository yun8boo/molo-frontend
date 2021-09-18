export class Content {
  private $value: string;

  constructor(value: string) {
    this.$value = value;
  }

  public get content(): string {
    return this.$value;
  }
}
