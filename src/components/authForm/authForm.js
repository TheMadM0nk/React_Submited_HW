import { useState } from "react";

export const AuthForm = ({ onsubmit }) => {
    const [form, setForm] = useState({ email: "", password: "" });
    const handleChangeForm = (e) => {
        const field = e.target.getAttribute("data-name");
        setForm({
            ...form,
            [field]: e.target.value,
        });
    };

    const handlePressInput = (e) => {
        if (e.code === "Enter") {
            onsubmit(form.email, form.password);
        }
    };

    return (
        <div>


            <input
                placeholder="email"
                onChange={handleChangeForm}
                data-name="email"
                value={form.email}
            />
            <input
                onKeyPress={handlePressInput}
                placeholder="password"
                onChange={handleChangeForm}
                data-name="password"
                value={form.password}
            />
            <button
                onClick={() => onsubmit(form.email, form.password)}
            >
                Sign In
            </button>
        </div >
    );
}
