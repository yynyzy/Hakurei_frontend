import { request } from "@/utils";

export default class Blog {
  public static getArticles = async () => {
    const res = await request.get('/blog/list');
    return res;
  }

  public static getArticlesByMySelf= async () => {
    const res = await request.get('/blog/list/my');
    return res;
  }

  public static getArticlesByUserId = async (user_id: String) => {
    const res = await request.get('/blog/list', {
      params: { user_id, }
    });
    return res;
  }
}
