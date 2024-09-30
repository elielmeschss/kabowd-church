import ClienteRepo from "@/src/core/ClientRepo";
import Clients from "@/src/core/Clients";
import firebase from "../config";

export default class CollectionClients implements ClienteRepo {

    #conversor = {
        toFirestore(clients: Clients){
            return{
                name: clients.name,
                age: clients.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.DocumentSnapshot, options: firebase.firestore.SnapshotOptions): Clients{
            const data = snapshot?.data(options)
            return new Clients(data?.name, data?.age, snapshot?.id)
        }
    }

    
    async save(client: Clients): Promise<Clients> {
        if(client?.id){
            await this.collection().doc(client.id).set(client)
            return client
        }else{
           const docRef = await this.collection().add(client)
           const doc = await docRef.get()

           return doc.data()
        }
    }

    async delete(client: Clients): Promise<void> {
        return this.collection().doc(client.id).delete()
    }

    async getAll(): Promise<Clients[]> {
        const query = await this.collection().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private collection() {
        return firebase.firestore().collection('clients').withConverter(this.#conversor)
    }
}