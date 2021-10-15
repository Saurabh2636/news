import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const app = firebase.initializeApp({
    apiKey: "AIzaSyBwBr43jLo-C2n3BAy8AosDOEkI055mIFw",
    authDomain: "blog-e3cc8.firebaseapp.com",
    projectId: "blog-e3cc8",
    storageBucket: "blog-e3cc8.appspot.com",
    messagingSenderId: "754262010440",
    appId: "1:754262010440:web:9c47aa6596ab9742dd067d"
})

export const auth = app.auth();
export default app;