import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCFUXm9tCDyxST7uhIcN1aGsKlittDsyg8',
  authDomain: 'portrfolio-9e1dd.firebaseapp.com',
  projectId: 'portrfolio-9e1dd',
  storageBucket: 'portrfolio-9e1dd.firebasestorage.app',
  messagingSenderId: '182977252216',
  appId: '1:182977252216:web:8a5c901dbb30b96cef968d',
  measurementId: 'G-K18K0Y0L1N',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
