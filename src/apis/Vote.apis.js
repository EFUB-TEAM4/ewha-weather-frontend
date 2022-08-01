import { serverAxios } from './index';

const PREFIX_URL = 'api/v1/votes';

export const GetVotes = async () => {
  try {
    const {
      data: { body },
    } = await serverAxios.get(`${PREFIX_URL}`);
    // console.log('GetVotes', body['vote list']);
    return body['vote list'];
  } catch (err) {
    return err;
  }
};

export const PostProCon = async (privateAxios, data) => {
  // console.log(approved, votePostsId, JSON.stringify(data));
  try {
    const response = await privateAxios.post(`${PREFIX_URL}/yesorno`, data);
    // console.log('PostProCon', response);
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
