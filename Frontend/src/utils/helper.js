import store from "../store/store.js";
import { redirect } from "@tanstack/react-router";

export const checkAuth = () => {
    const auth = store.getState().auth;
    if(!auth.isAuthenticated){
        throw redirect({to: "/auth"});
    }
}