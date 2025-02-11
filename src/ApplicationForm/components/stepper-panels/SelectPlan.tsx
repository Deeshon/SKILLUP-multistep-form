import { Form, Radio } from "antd";
import { PLANS } from "../../__data__/plans";

const SelectPlan = () => {
  return (
    <div className="flex flex-col items-center ubuntu-regular ">
      <div className="ubuntu-regular">
        <h1 className="text-2xl font-bold text-marine-blue">
          Select your plan
        </h1>
        <h2 className="pt-2 text-gray-400 text-lg">
          You have the option of monthly or yearly billing.
        </h2>
      </div>
      <div className="mt-10 ">
        <Form.Item name={["plan", "type"]}>
          <Radio.Group>
            <div className="flex flex-col">
              {PLANS.map((plan) => (
                <Radio.Button
                  value={plan.value}
                  style={{
                    height: "85px",
                    marginBottom: "10px",
                    padding: "10px",
                    paddingLeft: "20px",
                    width: "300px",
                    borderRadius: '10px'
                  }}
                >
                  <div className="flex items-center">
                    <div className={`size-14 rounded-full bg-[url(${plan.image})] bg-center bg-cover bg-no-repeat mr-5`}></div>
                    <div>
                      <p className="text-lg text-marine-blue font-bold">
                        {plan.title}
                      </p>
                      <p className="text-[15px] text-gray-400 font-semibold">
                        {plan.price}
                      </p>
                    </div>
                  </div>
                </Radio.Button>
              ))}
            </div>
          </Radio.Group>
        </Form.Item>
      </div>
    </div>
  );
};

export default SelectPlan;
