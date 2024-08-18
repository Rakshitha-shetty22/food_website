import {createContext} from 'react'

const UserContext = createContext({
    loggedUser : "default",
})

export default UserContext;