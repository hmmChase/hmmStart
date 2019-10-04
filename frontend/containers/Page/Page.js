import PropTypes from 'prop-types';
import { Query } from 'react-apollo';

import Head from '../Head/Head';
import SignOn from '../../components/SignOn/SignOn';
import { IS_LOGGED_IN } from '../../graphql/queries';

const Page = React.memo(props => (
  <Query query={IS_LOGGED_IN}>
    {({ data }) =>
      (data && data.isLoggedIn ? (
        props.children
      ) : (
        <>
          <Head title="Welcome" />

          <SignOn />
        </>
      ))}
  </Query>
));

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
