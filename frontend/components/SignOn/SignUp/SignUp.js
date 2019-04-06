import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Error from '../../Error/Error';
import * as query from './SignUp.query';
import * as Styled from './SignUp.style';

class SignUp extends React.PureComponent {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async (e, signUp) => {
    e.preventDefault();
    await signUp();
    this.setState({ email: '', password: '', confirmPassword: '' });
    this.props.close();
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    const isInvalid = email === '' || password === '' || confirmPassword === '';

    return (
      <Mutation
        mutation={query.SIGN_UP_MUTATION}
        variables={this.state}
        refetchQueries={[
          { query: query.USERS_QUERY },
          { query: query.ME_QUERY }
        ]}
      >
        {(signUp, { loading, error }) => {
          if (loading) return <p>Loading...</p>;

          return (
            <Styled.div>
              <form onSubmit={e => this.onSubmit(e, signUp)}>
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Create a new Account</h2>

                  {error && <Error error={error} />}

                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </label>

                  <label htmlFor="password">
                    Password
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChange}
                    />
                  </label>

                  <label htmlFor="confirmPassword">
                    Confirm Your Password
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      value={confirmPassword}
                      onChange={this.onChange}
                    />
                  </label>

                  <button type="submit" disabled={isInvalid}>
                    Sign Up
                  </button>
                </fieldset>
              </form>
            </Styled.div>
          );
        }}
      </Mutation>
    );
  }
}

SignUp.propTypes = {
  close: PropTypes.func.isRequired
};

export default SignUp;
