import qs from 'qs';
import { useLocation } from 'react-router-dom';

const useQueryString = props => {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  // console.log(query)
  return query[props];
};

export default useQueryString;
