import { httpRequest } from "@/utils";
import { RecommendPictureParams } from "../types/Yixiv";

export default class Yixiv {
  // 缓存 tags
  private static Tags = null;

  public static getTags = async () => {
    if(Yixiv.Tags) {
      return Yixiv.Tags;
    }
    const { data } = await httpRequest.get('https://www.vilipix.com/api/v1/search/recommand_tag');
    Yixiv.Tags = data;
    return data;
  };


  public static getRecommendPicture = async (params: RecommendPictureParams) => {
    const { data } = await httpRequest.get(`https://www.vilipix.com/api/v1/picture/recommand?limit=${params.limit}&offset=${params.offset}`);
    return data;
  };
}
