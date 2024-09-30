interface PutInProps{
  type?: 'text' | 'number'
  text: string
  value: any
  readonly?: boolean
  className?: string
  valueChange?: (valor:any) => void
}

export default function PutIn(props: PutInProps){
  return(
      <div className="flex flex-col">
          <label className="mb-2">{props.text}</label>
          <input type={props.type ?? 'text'} value={props.value} readOnly={props.readonly} onChange={e => props.valueChange?.(e.target.value)}
          className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2`}/>
      </div>
  )
}