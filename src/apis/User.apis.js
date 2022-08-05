const PREFIX_URL = '/api/v1/users';

// /api/v1/users/currentUser
const currentUser = async privateAxios => {
  try {
    const {
      data: {
        body: { user },
      },
    } = await privateAxios.get(`${PREFIX_URL}/currentUser`);
    // console.log('currentUser 요청', PREFIX_URL, user);
    return user;
  } catch (err) {
    return err;
  }
};

export default currentUser;
