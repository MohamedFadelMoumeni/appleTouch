import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
firebase.initializeApp(firebaseConfig);


export const createUserProfile  = async (userAuth, additioalData) => {
  if(!userAuth) return;
   const userRef = firestore.doc(`/users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   if(!snapShot.exists){
    const { email, displayName, photoURL} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        id: snapShot.id,
        email,
        displayName,
        photoURL,
        createdAt,
        ...additioalData
      })
    }catch(e){
      console.log("Error here : "+ e.message);
    }
   }
   return userRef;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
          unsubscribe();
          resolve(userAuth)
      }, reject)
  })
}


export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacbook = () => auth.signInWithPopup(facebookProvider);




