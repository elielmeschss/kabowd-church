import { useState } from "react";
import Clients from "../core/Clients";
import PutIn from "./PutIn";
import Button from "./Button";

interface FormsProps {
    client: Clients
    clientChange?: (client: Clients) => void
    cancelado?: () => void
}

export default function Forms(props: FormsProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {
                id ? (
                    <PutIn readonly text="Código" value={id} className="mb-4" />

                ) : false
            }

            <PutIn text="Nome" value={name} valueChange={setName} className="mb-4" />
            <PutIn text="idade" type="number" value={age} valueChange={setAge} className="mb-4" />

            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2" onClick={() => props.clientChange?.(new Clients(name, age, id))}>
                    {
                        id? 'Alterar':'Salvar'
                    }
                </Button>
                <Button onClick={props.cancelado}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}