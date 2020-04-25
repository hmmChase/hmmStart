import { useState } from 'react';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
// import { useMutation } from '@apollo/client';
import { setAccessToken } from '../utils/accessToken';
import { SIGN_IN, _IS_LOGGED_IN } from '../graphql/queries';

const SignIn = () => {
  const [email, setEmail] = useState('user@email.com');
  const [password, setPassword] = useState('User123#');

  const update = (cache, data) => {
    const isLoggedIn = !!data.data.signIn.accessToken;

    cache.writeData({ id: 'isLoggedIn', data: { isLoggedIn } });

    // cache.writeQuery({
    //   id: 'isLoggedIn',
    //   query: IS_LOGGED_IN,
    //   data: { isLoggedIn: !!data.data.signIn.accessToken },
    // });
  };

  const onCompleted = (data) => {
    if (data && data.signIn && data.signIn.accessToken) {
      setAccessToken(data.signIn.accessToken);

      Router.push('/');
    }
  };

  const [signIn] = useMutation(SIGN_IN, {
    update(cache, data) {
      update(cache, data);
    },

    onCompleted(data) {
      onCompleted(data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn({ variables: { email, password } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Sign In</h2>

        <div>
          <label htmlFor='email'>
            Email
            <input
              name='email'
              placeholder='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor='password'>
            Password
            <input
              name='password'
              placeholder='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type='submit'>Log In</button>
      </fieldset>
    </form>
  );
};

export default SignIn;
