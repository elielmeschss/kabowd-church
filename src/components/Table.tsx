import Clients from "../core/Clients";
import { IconTrash, IconEdition } from "./icons";

interface TableProps {
  clients: Clients[]
  selectedClients?: (cliente: Clients) => void
  removedClients?: (cliente: Clients) => void
}

export default function Table(props: TableProps) {
  const showActions = props.removedClients || props.selectedClients

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
    return (
      <td className="flex justify-center">
        {props.selectedClients ? (
          <button className={
            `flex justify-center items-center 
          text-green-600 rounded-full hover:bg-purple-50 
           p-2 m1`
          } onClick={() => props.selectedClients?.(clients)}>
            {IconEdition}
          </button>
        ) : false}

        {
          props.removedClients ? (
            <button className={
              `flex justify-center items-center 
              text-red-500 rounded-full hover:bg-purple-50 
              p-2 m1`
            } onClick={() => props.removedClients?.(clients)}>
              {IconTrash}
            </button>
          ) : false
        }
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
          {showActions ? <th className="p-4">Ações</th> : false}
        </tr>
      </thead>

      <tbody>
        {renderData()}
      </tbody>

    </table>
  )
}