import { request } from '@/utils/request';

const Api = {
  BaseList: '/auth/login',
};

export function login(userinfo) {
  return request.post<any>(
    {
      url: Api.BaseList,
      data: userinfo,
    },
    {
      withToken: false,
    },
  );
}
