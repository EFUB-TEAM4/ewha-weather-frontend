import { serverAxios } from './index';

const PREFIX_URL = 'api/v1/votes';

export const GetVotes = async () => {
  try {
    const {
      data: { body },
    } = await serverAxios.get(`${PREFIX_URL}`);

    return body['vote list'];
  } catch (err) {
    return err;
  }
};

export const PostProCon = async (privateAxios, data) => {
  try {
    const response = await privateAxios.post(`${PREFIX_URL}/yesorno`, data);

    return response;
  } catch (err) {
    return err;
  }
};

export const GetUserVote = async (userId, votePostsId) => {
  try {
    const {
      data: {
        body: { vote },
      },
    } = await serverAxios.get(
      `${PREFIX_URL}/yesorno?userId=${userId}&votePostsId=${votePostsId}`,
    );
    // console.log('PostProCon', vote);
    return vote;
  } catch (err) {
    return err;
  }
};

export const PostVotes = async (privateAxios, place, clothes) => {
  try {
    const { data } = await privateAxios.post(`${PREFIX_URL}`, {
      building: place.length > 0 ? place : '학교',
      clothes,
    });
    // console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};
