/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { atom, selector } from 'recoil';
import { usePrivateAxios } from 'hooks';
import { currentUser } from 'apis/User.apis';

export const userState = atom({
  key: 'User',
  default: {
    email: '',
    id: '',
    fullName: '',
  },
});

export const GetUser = selector({
  key: 'CurrentUser/get',
  get: async ({ get }) => {
    const privateAxios = usePrivateAxios();
    const { email, fullName, id } = await currentUser(privateAxios);
    const response = {
      email,
      fullName,
      id,
    };
    return response;
  },
  set: ({ set }, newValue) => {
    // console.log("GetCurrent",newValue)
    set(userState, newValue);
  },
});
