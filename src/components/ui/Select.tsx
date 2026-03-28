const Select = ({options, className}: {options: string[], className?: string}) => {
    return (
        <select name="" id="" className={className}>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default Select