import { ResponseError } from 'umi-request';

export const request = {
  prefix: 'https://pvp.qq.com',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};
