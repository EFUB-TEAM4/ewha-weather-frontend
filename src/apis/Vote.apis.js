import axios from 'axios';
import { serverAxios } from './index';

const PREFIX_URL = 'api/v1/votes';

export const GetVotes = async () => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}`);
    // console.log('GetVotes', data);
    return data;
  } catch (err) {
    return err;
  }
};

export const PostProCon = async (approved, votePostsId) => {
  const data = { approved, votePostsId };
  // console.log(approved, votePostsId, JSON.stringify(data));
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/${PREFIX_URL}/yesorno`,
      data,
      { headers: { 'content-type': 'application/json' } },
    );
    // console.log('PostProCon', response);
    return response;
  } catch (err) {
    return err;
  }
};
