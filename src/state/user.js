/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { atom, selector } from 'recoil';
import { usePrivateAxios } from 'hooks';
import { currentUser } from 'apis/User.apis';

const DEFAULT_USER_STATE = {
  email: '',
  id: '',
  fullName: '',
};

export const userState = atom({
  key: 'User',
  default: DEFAULT_USER_STATE,
});

export const GetUser = selector({
  key: 'CurrentUser/get',
  get: async ({ get }) => {
    // 로그인 이후 정상적으로 토큰 발행된 상태일 때만 api로 유저 정보 받아옴
    const privateAxios = usePrivateAxios();
    if (localStorage.getItem('token')) {
      const { email, fullName, id } = await currentUser(privateAxios);
      // console.log(email, fullName, id)
      if (email && fullName && id) {
        const response = {
          email,
          fullName,
          id,
        };
        return response;
      }
    }

    return DEFAULT_USER_STATE;
  },
  set: ({ set }, newValue) => {
    // console.log("GetCurrent",newValue)
    set(userState, newValue);
  },
});
