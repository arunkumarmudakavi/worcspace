"use client";

const Input = ({ placeholder, className }: { placeholder?: string; className?: string }) => {
    return (
        <input className={className} type="text" placeholder={placeholder} />
    )
}

export default Input;