import { collection, doc, setDoc, addDoc, getDoc, deleteDoc, getDocs, query, DocumentSnapshot, SnapshotOptions, CollectionReference } from 'firebase/firestore';
import { db } from '../config'; // Supondo que 'db' é a instância do Firestore inicializada em '../config'
import ClienteRepo from "@/src/core/ClientRepo";
import Clients from "@/src/core/Clients";

export default class CollectionClients implements ClienteRepo {
    #conversor = {
        toFirestore(clients: Clients) {
            return {
                name: clients.name,
                age: clients.age,
            };
        },
        fromFirestore(snapshot: DocumentSnapshot, options?: SnapshotOptions): Clients {
            const data = snapshot.data(options);
            return new Clients(data.name, data.age, snapshot.id);
        }
    };

    async save(client: Clients): Promise<Clients> {
        const clientsCollection = collection(db, 'clients').withConverter(this.#conversor);
        if (client?.id) {
            const clientDocRef = doc(clientsCollection, client.id);
            await setDoc(clientDocRef, client);
            return client;
        } else {
            const docRef = await addDoc(clientsCollection, client);
            const docSnap = await getDoc(docRef);
            return this.#conversor.fromFirestore(docSnap);
        }
    }

    async delete(client: Clients): Promise<void> {
        const clientsCollection = collection(db, 'clients');
        if (client?.id) {
            const clientDocRef = doc(clientsCollection, client.id);
            await deleteDoc(clientDocRef);
        }
    }

    async getAll(): Promise<Clients[]> {
        const clientsCollection = collection(db, 'clients').withConverter(this.#conversor);
        const q = query(clientsCollection);
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data()) ?? [];
    }

    private collection(): CollectionReference<Clients> {
        return collection(db, 'clients').withConverter(this.#conversor);
    }
}