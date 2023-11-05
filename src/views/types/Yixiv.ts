export enum TagColor {
  'pink'='pink',
  'red'='red',
  'orange'='orange',
  'green'='green',
  'cyan'='cyan',
  'blue'='blue',
  'purple'='purple',
}

export interface ITag {
  tag_id: number
  title: string
  zh?: string | null
}

export interface RecommendPictureParams {
  limit: number
  offset: number
}
