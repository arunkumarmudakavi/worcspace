"use client";

const Label = ({ name, className }: { name: string; className?: string }) => {
    return (
        <label className={className}>{name}</label>
    )
}

export default Label;