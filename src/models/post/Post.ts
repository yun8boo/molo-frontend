import { Title } from './Title';
import { Content } from './Content';

export class Post {
  private $title: Title;
  private $content: Content;

  constructor(title: Title, content: Content) {
    this.$title = title;
    this.$content = content;
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
