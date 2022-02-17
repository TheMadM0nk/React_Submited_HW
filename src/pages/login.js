import { firebaseApp } from '../api/firebase';
import { AuthForm } from "../components";
import { useCallback } from "react";

export function LoginPage() {

    const onSubmit = useCallback((email, password) => {
        return firebaseApp.auth().signInWithEmailAndPassword(email, password);
    }, []);

    return (
        <div>
            <h1>Sign In Page</h1>
            <AuthForm onsubmit={onSubmit} />
        </div>
    )
}