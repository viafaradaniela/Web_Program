import { useState } from "react"
import { useAuth } from './useAuth'
import { useNavigate } from "react-router-dom"

export const useForm = () => {

    const navigate = useNavigate()

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    })

    const { isLogged, logIn } = useAuth()

    const handleSubmit = (element) => {
        element.preventDefault()
        logIn(formState)
        navigate('/')
    }

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return {
        formState,
        handleInputChange,
        handleSubmit
    }
}