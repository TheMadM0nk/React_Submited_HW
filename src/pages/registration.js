import { firebaseApp } from "../api/firebase";
import { useCallback } from "react";
import { AuthForm } from "../components";

export function RegistrationPage() {

    const onSubmit = useCallback((email, password) => {
        return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    }, []);

    return (
        <div>
            <h1>Registration Page</h1>
            <AuthForm onsubmit={onSubmit} />
        </div>
    )
}