import PersonalInfo from "./stepper-panels/PersonalInfo";
import { Form } from "antd";
import { useContext } from "react";
import ApplicationContext from "../../ApplicationContextProvider";
import SelectPlan from "./stepper-panels/SelectPlan";

const FormContainer = () => {
  const {form, current} = useContext(ApplicationContext)
  return (
    <div className="w-[90%] h-fit bg-white rounded-xl shadow-xl shadow-gray p-6 sm:shadow-none">
      <Form layout="vertical" form={form}>
        {current === 1 && (
          <PersonalInfo />
        )}
        {current === 2 && (
          <SelectPlan />
        )}
      </Form>
    </div>
  );
};

export default FormContainer;
