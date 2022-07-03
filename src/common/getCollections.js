// FIREBASE
import { firestore } from '../firebase/config';

const getCollections = async (collection) => {
  const results = [];

  firestore.collection(collection).onSnapshot((snap) => {
    if (!snap.empty) {
      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
    }
  });

  return results;
};

export default getCollections;
