import Layout from "../components/Layout";
import Table from "../components/Table";
import Clients from "../core/Clients";

export default function Home() {

  const clients = [
    new Clients("Ana", 34, "1"),
    new Clients("Pedro", 14, "2"),
    new Clients("Leon", 24, "3")
  ]

  return (
    <>
      <div className={
        `flex justify-center items-center h-screen 
        bg-gradient-to-r from-blue-500 to-purple-500 text-white`
      }>

        <Layout titulo="Cadastro Simples">
          <Table clients={clients}></Table>
        </Layout>
      </div>


    </>
  );
}
