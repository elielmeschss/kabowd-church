import ClienteRepo from "@/src/core/ClientRepo";
import Clients from "@/src/core/Clients";
import firebase from "../config";

export default class CollectionClients implements ClienteRepo {

    #conversor = {
        toFirestore(clients: Clients) {
            return {
                name: clients.name,
                age: clients.age,
            };
        },
        fromFirestore(snapshot: firebase.firestore.DocumentSnapshot, options: firebase.firestore.SnapshotOptions): Clients {
            const data = snapshot?.data(options);
            return new Clients(data.name, data.age, snapshot.id);
        }
    };

    async save(client: Clients): Promise<Clients> {
        if (client?.id) {
            // Usa o conversor para salvar corretamente
            await this.collection().doc(client.id).set(client);
            return client;
        } else {
            const docRef = await this.collection().add(client);
            const doc = await docRef.get();
            // Usa o conversor para recuperar o cliente corretamente
            return this.#conversor.fromFirestore(doc, {});
        }
    }

    async delete(client: Clients): Promise<void> {
        return this.collection().doc(client.id).delete();
    }

    async getAll(): Promise<Clients[]> {
        const query = await this.collection().get();
        // Usa o conversor para converter todos os documentos corretamente
        return query.docs.map(doc => this.#conversor.fromFirestore(doc, {})) ?? [];
    }

    private collection() {
        return firebase.firestore().collection('clients').withConverter(this.#conversor);
    }
}
