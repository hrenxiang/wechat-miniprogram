export interface QueryPageParam {
  page_num: number;
  page_size: number;
}

export interface DailyResponse {
  code: string;
  message: string;
  data: DailyResponsePageData;
}

export interface DailyResponsePageData {
  countId: null;
  current: number;
  maxLimit: null;
  optimizeCountSql: boolean;
  orders: string[];
  pages: number;
  records: DailyRecord[];
  searchCount: boolean;
  size: number;
  total: number;
}

export interface DailyRecord {
  content: string;
  create_time: string;
  id: number;
  tittle: string;
  illustration: string;
}
