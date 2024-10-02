// Importa as funções necessárias do SDK do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta as instâncias do Firestore e Auth para uso em outras partes do aplicativo
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };