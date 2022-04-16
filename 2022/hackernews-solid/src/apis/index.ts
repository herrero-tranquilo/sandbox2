export const categories = [
  "topstories",
  "newstories",
  "askstories",
  "showstories",
  "jobstories",
] as const;
type Props = {
  method: "GET";
  url: string;
};
export type Category = typeof categories[number];
export type StoryId = number;
export type Story = {
  id: StoryId;
  score: number;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  title?: string;
  by: string;
  text?: string;
  url?: string;
  time: number;
  descendants?: number;
  parent?: number;
  kids?: StoryId[];
  parts?: StoryId[];
  poll?: number;
  deleted?: boolean;
  dead?: boolean;
};

const formatDestination = (source: ReadonlyArray<string>, literal?: string) =>
  `https://hacker-news.firebaseio.com/v0/${literal || source}`;

const hasScheme = (source: string) => /^((http|https):\/\/)/.test(source);

async function fetchAPI<T>(props: Props) {
  const { method, url } = props;
  const destination = hasScheme(url) ? url : formatDestination`${url}`;
  const response = await fetch(destination, {
    method,
  });
  return (await response.json()) as T;
}

/**
 * GET
 * @param {Category}
 * category
 * 카테고리별 글 ID 리스트 가져오기
 * */
export async function getStoryIdsFromAPI(
  category: Category
): Promise<StoryId[]> {
  const response = await fetchAPI<StoryId[]>({
    method: "GET",
    url: `${category}.json?print=pretty`,
  });
  return response;
}

/**
 * GET
 * @param {Category}
 * id
 * 스토리 상세 가져오기
 * */
export async function getStoryFromAPI(id: string): Promise<Story> {
  if (isNaN(parseInt(id))) throw "parameter id is NaN";
  const response = await fetchAPI<Story>({
    method: "GET",
    url: `item/${id}.json?print=pretty`,
  });
  return response;
}
