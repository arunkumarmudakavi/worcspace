const Select = ({options, className, value, onChange}: {options: string[] | number[], className?: string, value?: string | number, onChange?: (value: string | number) => void}) => {
    return (
        <select name="" id="" value={value} className={className} onChange={(e) => onChange && onChange(e.target.value)}>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default Select