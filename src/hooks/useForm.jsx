import { useState } from 'react'

export const useForm = (callback, defaults) => {

    const [input, setInput] = useState(defaults)

    
    const handleInputChange = (e) => {
        const {name,value} = e.target
        setInput((prev) => ({  ...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        callback(input)
      };


    return {
    input,
    handleInputChange,
    handleSubmit
    }
}