export interface WaterFallProps {
  gap: number,
  column: number,
  pageSize: number
  request: (page: number, pageSize: number) => Promise<ImageItem[]>
}

export interface ImageItem {
  id: string | number,
  url: string,
  width: number,
  height: number,
  // [key: string]: any,
}
