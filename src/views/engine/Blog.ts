import { request } from "@/utils";
import { ArticleCreate } from "../types/blog";

export default class Blog {
  public static getArticles = async () => {
    const res = await request.get('/blog/list');
    return res;
  }

  public static createArticle = async (params: ArticleCreate) => {
    const res = await request.post('/blog/create', params);
    return res;
  }

  public static getArticleInfoByArticleId = async (articleId: number) => {
    const res = await request.get(`/blog/${articleId}`);
    return res;
  }

  public static deleteArticleByArticleId = async (articleId: number) => {
    const res = await request.delete(`/blog/${articleId}`);
    return res;
  }


  public static getArticlesByMySelf= async () => {
    const res = await request.get('/blog/list/my');
    return res;
  }

  public static getArticlesByUserId = async (user_id: String) => {
    const res = await request.get('/blog/list', {
      params: { user_id }
    });
    return res;
  }
}
