import { getUserData, removeUserData } from "./Storage"


export const isAuthendicated=()=>{
    return getUserData()!=null?true:false;
}

export const logout = ()=>{
    removeUserData();
}