import Clients from "./Clients";

export default interface ClienteRepo {
    save(client: Clients): Promise<Clients>
    delete(clients: Clients): Promise<void>
    getAll(): Promise<Clients[]>
}