import PropTypes from 'prop-types';
import withApollo from '../../graphql/withApollo';
import signedIn from '../../utils/signedIn';
import redirect from '../../utils/redirect';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import IdeaDetail from '../../components/IdeaDetail';
import Footer from '../../components/Footer';

const IdeaPage = (props) => (
  <Layout
    title='Idea Detail'
    header={<Header ideaId={props.id} />}
    content={<IdeaDetail ideaId={props.id} />}
    footer={<Footer />}
  />
);

IdeaPage.getInitialProps = (ctx) => {
  const { req, res, query } = ctx;

  /* must be signed in */
  if (signedIn(req)) return { id: query.id };
  else redirect(res, '/welcome');
};

IdeaPage.propTypes = { id: PropTypes.string.isRequired };

export default withApollo({ ssr: true })(IdeaPage);
