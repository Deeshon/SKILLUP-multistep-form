import { FormInstance } from "antd";
import { useForm } from "antd/es/form/Form";
import { createContext, ReactElement, useState } from "react";

// Create the context
const ApplicationContext = createContext({
    formData: [],
    current: 1,
    onNext: () => {},
    onPrevious: () => {},
    form: '' as unknown as FormInstance<unknown>
});

// Create the context provider
export const ApplicationContextProvider = ({children} : {children: ReactElement}) => {
    const [form] = useForm();
    const [formData, setFormData] = useState([])
    const [current, setCurrent] = useState(2);

    const onNext = () => {
        form.validateFields()
        .then((values) => {
            console.log({values})
            setCurrent((prevState) => (prevState === 4 ? prevState : prevState + 1));
            setFormData({...formData, ...values})
            console.log("formDAta", {...formData, ...values})
        }).catch((err) => console.error(err))
    }

    const onPrevious = () => {
        setCurrent((prevState) => {
            if (prevState !== 1) {
                return prevState -1
            } else {
                return prevState
            }
        })
    }

    return (
        <ApplicationContext.Provider value={{formData, current, onNext, onPrevious, form}}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContext;

