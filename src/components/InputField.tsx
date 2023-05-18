type InputFieldProps = {
    placeholder: string
    name: string
    value: string
    onChange: (e: any) => void,
    type?: string
}

const InputField = ({placeholder, name, value, onChange, type="text"}: InputFieldProps) => {
    return (
        <input autoComplete="off" type={type} name={name} value={value} onChange={e => onChange(e)} className="bg-white w-full my-3 p-1 pl-8 focus:outline-none placeholder:text-[#818181]" placeholder={placeholder}></input>
    )
}

export default InputField