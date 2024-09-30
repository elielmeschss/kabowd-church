import Clients from "../core/Clients";
import { IconTrash, IconEdition } from "./icons";

interface TableProps {
  clients: Clients[]
}

export default function Table(props: TableProps) {

  function renderData() {
    return props.clients?.map((cl, i) => {
      return (
        <tr key={cl.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="p-4 text-left">{cl.id}</td>
          <td className="p-4 text-left">{cl.name}</td>
          <td className="p-4 text-left">{cl.age}</td>
          {renderAction(cl)}
        </tr>
      )
    })
  }

  function renderAction(clients: Clients) {
    console.log(clients);
    
    return (
      <td>
        <button className={
          `flex justify-center items-center 
          text-green-600 rounded-full hover:bg-purple-50 
          p-2 m1`
        }>
          {IconEdition}
        </button>
        <button className={
          `flex justify-center items-center 
          text-red-500 rounded-full hover:bg-purple-50 
          p-2 m1`
        }>
          {IconTrash}
        </button>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">

      <thead className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}>
        <tr>
          <th className="text-left p-4">Código</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          <th className="p-4">Ações</th>
        </tr>
      </thead>

      <tbody>
        {renderData()}
      </tbody>

    </table>
  )
}