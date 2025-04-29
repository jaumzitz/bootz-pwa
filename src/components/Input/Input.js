import style from "./Input.module.css";

export function Input({ type, id, name, required, label }) {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                name={name}
                required={required}
            />
        </div>
    );
}