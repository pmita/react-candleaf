import { useState } from 'react';
// FIREBASE
import { auth } from '../firebase/config';

// eslint-disable-next-line import/prefer-default-export
export const useSignUp = (email, password, username) => {
  // STATE & VARIABLE
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // FUNCTIONS
  const signup = async () => {
    // reset state
    setIsPending(true);
    setError(null);

    try {
      const response = await auth.createUserWithEmailAndPassword(email, password);

      if (!response.user) {
        throw new Error('Sorry, could not sign up right now');
      }

      await auth.updateCurrentUser({
        displayName: username,
      });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};
