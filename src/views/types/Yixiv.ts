export enum TagColor {
  'c1'='rgb(127, 126, 200)',
  'c2'='rgb(192, 126, 200)',
  'c3'='rgb(200, 126, 138)',
  'c4'='rgb(200, 164, 126)',
  'c5'='rgb(126, 165, 200)',
  'c6'='rgb(148, 200, 126)',
  'c7'='rgb(200, 195, 126)',
  'c8'='rgb(126, 195, 200)',
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
  picture_id: number | string
  user_id: number | number
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

export interface IGetPeriodicalList {
  offset: number
  limit: number
};

export interface IGetPeriodical {
  periodicalId: string
  offset: number
  limit: number
};
