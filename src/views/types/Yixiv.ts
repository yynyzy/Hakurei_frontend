export enum TagColor {
  'pink'='pink',
  'red'='red',
  'orange'='orange',
  'green'='green',
  'cyan'='cyan',
  'blue'='blue',
  'purple'='purple',
};

export enum SearchType {
  'AUTHOR'='author',
  'TAG'='tag',
};

export interface ITag {
  tag_id: number
  title: string
  zh?: string | null
};

export interface IRecommendPictureParams {
  limit: number
  offset: number
};

export interface IUserBestPictureParams {
  picture_id: string
  user_id: number
};

export interface IGetPictureByUserIdParams {
  author_user_id: string | number,
  offset: number
  limit: number
};

export interface IGetNewWorksParams {
  offset: number
  limit: number
};

export interface IGetRankingListsParams {
  type: number
  ranking_date: string
  offset: number
  limit: number
};

export interface ISearchByTypeParams {
  type: string
  keyword: string
  offset: number
  limit: number
};
