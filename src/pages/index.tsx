import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Table from "../components/Table";
import Clients from "../core/Clients";
import Button from "../components/Button";
import Forms from "../components/Forms";
import ClienteRepo from "../core/ClientRepo";
import CollectionClients from "../backend/db/collectionClients";

export default function Home() {
  const repo: ClienteRepo = new CollectionClients()

  const [cliente, setCliente] = useState(Clients.vazio())
  const [clientes, setClientes] = useState<Clients[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(takeAll, [])
  
  function takeAll() {
    repo.getAll().then(clientes =>{
      setClientes(clientes)
      setVisivel('tabela')
    })
    
  }

  function selectedClient(client: Clients) {
    setCliente(client)
    setVisivel('form')
  }

  function removedClient(client: Clients) {
    console.log(client.name);

  }
  
  async function saveClient(client: Clients){
    await repo.save(client)
    takeAll()
  }

  function newClient(){
    setCliente(Clients.vazio)
    setVisivel('form')
  }



  return (
    <>
      <div className={`flex justify-center items-center h-screen `}>

        <Layout titulo="Cadastro Simples">
          {
            visivel === 'tabela' ? (
              <>
                <div className="flex justify-end">
                  <Button color="green" className="mb-4" onClick={newClient}>Novo Cliente</Button>
                </div>
                <Table clients={clientes} selectedClients={selectedClient} removedClients={removedClient}></Table>
              </>

            ) : (
              <Forms client={cliente} cancelado={()=> setVisivel('tabela')} clientChange={saveClient}/>
            )
          }
        </Layout>
      </div>


    </>
  );
}
