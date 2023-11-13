import { httpRequest } from "@/utils";
import { RecommendPictureParams, UserBestPictureParams } from "../types/Yixiv";

export default class Yixiv {
  // 缓存 tags
  private static Tags = null;

  private static recommendPicture = null;

  public static getTags = async () => {
    if(Yixiv.Tags) {
      return Yixiv.Tags;
    }
    const { data } = await httpRequest.get('https://www.vilipix.com/api/v1/search/recommand_tag');
    Yixiv.Tags = data;
    return data;
  };


  public static getRecommendPicture = async (params: RecommendPictureParams) => {
    if(Yixiv.recommendPicture) {
      return Yixiv.recommendPicture;
    }
    const { data } = await httpRequest.get(`https://www.vilipix.com/api/v1/picture/recommand?limit=${params.limit}&offset=${params.offset}`);
    Yixiv.recommendPicture = data;
    return data;
  };

  public static getUserBestPicture = async (params: UserBestPictureParams) => {
    const { data } = await httpRequest.get(`https://api2.vilipix.com/api/v1/picture/user_best_picture?limit=8&offset=0&picture_id=${params.picture_id}&user_id=${params.user_id}`);
    return data;
  };

  public static getUserPictureInfo = async (pictureId: string) => {
    const { data } = await httpRequest.get(`https://api2.vilipix.com/api/v1/picture/${pictureId}?picture_id=${pictureId}`);
    return data;
  };
}
