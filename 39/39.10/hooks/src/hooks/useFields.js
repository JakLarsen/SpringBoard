import React, {useState} from 'react'


const useFields = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData(formData => (
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        ));
    }

    const resetFormData = () => {
        console.log("SUBMITTED")
        setFormData(initialState)
    }

    return [formData, handleChange, resetFormData]
}

export default useFields