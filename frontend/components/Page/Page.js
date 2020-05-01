import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Head from '../Head/Head';
import SignOn from '../SignOn/SignOn';
import { IS_LOGGED_IN } from '../../graphql/queries';

const Page = (props) => {
  const { data } = useQuery(IS_LOGGED_IN);

  return data && data.isLoggedIn ? (
    props.children
  ) : (
    <>
      <Head title='Welcome' />

      <SignOn />
    </>
  );
};

Page.propTypes = { children: PropTypes.array.isRequired };

export default Page;
