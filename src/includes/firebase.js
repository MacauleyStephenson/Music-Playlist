import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyC7-IEy7qqg97HhpF9-ettNXDzozfHt4bg',
	authDomain: 'music-80470.firebaseapp.com',
	projectId: 'music-80470',
	storageBucket: 'music-80470.appspot.com',
	appId: '1:143333674081:web:ff2de5a9ee308758d8ae20',
	measurementId: 'G-SKPS2W99M1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
	console.log(`Firebase persistance error ${error.code}`)
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
	auth,
	db,
	usersCollection,
	songsCollection,
	commentsCollection,
	storage,
};
