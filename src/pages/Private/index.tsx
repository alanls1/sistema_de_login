import { useContext } from "react"
import { AuthContext } from "../../Contexts/Auth/AuthContext"

export const Private = () => {
    const auth = useContext(AuthContext)

    return(
        <div>
            Página privada

            ola, {auth.user?.name } ,tudo certo?
        </div>
    )
}