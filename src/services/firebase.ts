import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER,
    REACT_APP_FIREBASE_APP_ID,
} = process.env
const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: REACT_APP_FIREBASE_APP_ID,
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function fetchDataByPath<T>(path: string) {
    const data: T[] = []
    const querySnapshot = await getDocs(collection(db, path))

    querySnapshot.forEach((doc) => {
        data.push(doc.data() as T)
    })

    return data
}
