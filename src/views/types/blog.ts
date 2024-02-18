export interface Article {
  id: number,
  user_id: String,
  title: String,
  description: String,
  content: String,
  status: number,
  created_at: any,
  updated_at: any,
}

export interface ArticleCreate {
  title: String,
  description: String,
  content: String,
  status: number | 3,
}
