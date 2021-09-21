import { v4 } from 'uuid';
import { Title } from './Title';
import { Content } from './Content';

export class Post {
  private $id?: number;
  private $uuid: string;
  private $title: Title;
  private $content: Content;

  constructor(title: Title, content: Content, id?: number) {
    this.$id = id;
    this.$uuid = v4();
    this.$title = title;
    this.$content = content;
  }

  public get id(): number | undefined {
    return this.$id;
  }

  public get uuid(): string {
    return this.$uuid;
  }

  public get title(): Title {
    return this.$title;
  }

  public get content(): Content {
    return this.$content;
  }

  public static create({
    title,
    content,
  }: {
    title: string;
    content: string;
  }): Post {
    const _title = new Title(title);
    const _content = new Content(content);

    return new Post(_title, _content);
  }
}
