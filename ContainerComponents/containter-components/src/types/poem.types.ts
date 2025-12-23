export interface Poem {
  poem: PoemProps;
  totalCount: number;
}

export interface PoemProps {
  author: string;
  title: string;
  lines: string[];
  lineCount: number;
}
