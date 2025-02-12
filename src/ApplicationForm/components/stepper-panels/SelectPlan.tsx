import { Form, Radio, Switch } from "antd";
import { PLANS } from "../../__data__/plans";
import styled from "styled-components";
import { useState } from "react";

const SelectPlan = () => {

  const [isYearly, setIsYearly] = useState(false)

  const StyledRadioButton = styled(Radio.Button)`
    height: ${isYearly ? '95px' : '85px'};
    margin-bottom: 10px;
    padding: 10px;
    padding-left: 20px;
    width: 300px;
    border-radius: 10px;

    @media (width >= 40rem) {
    height: ${isYearly ? '200px' : '170px'};
      width: 130px;
      margin-left: 20px;
    }
  `;

  const CustomSwitch = styled(Switch)`
    .ant-switch-inner {
      background: #02295a;
    }
  `;

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
            <div className="flex flex-col sm:flex-row">
              {PLANS.map((plan) => (
                <StyledRadioButton value={plan.value}>
                  <div className="flex items-center sm:flex-col sm:items-start sm:relative">
                    <div
                      className={`size-14 rounded-full bg-[url(${plan.image})] bg-center bg-cover bg-no-repeat mr-5`}
                    ></div>
                    <div className="sm:absolute sm:top-24">
                      <p className="text-lg text-marine-blue font-bold">
                        {plan.title}
                      </p>
                      <p className="text-[15px] text-gray-400 font-semibold">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice }
                      </p>
                      <p className="text-sm text-marine-blue font-semibold">
                        {isYearly ? plan.yearlyTag : '' }
                      </p>
                    </div>
                  </div>
                </StyledRadioButton>
              ))}
            </div>
          </Radio.Group>
        </Form.Item>
        <div className="bg-alabaster rounded-xl flex justify-center h-14 items-center">
          <div className="flex justify-around w-2/3 h-8 items-center">
            <p className="text-marine-blue text-md font-bold ubuntu-regular">
              Monthly
            </p>
              <div className="h-8">
              <Form.Item name={["plan", "isYearly"]} valuePropName="checked">
              <CustomSwitch onChange={(checked) => setIsYearly(checked)} />
            </Form.Item>
              </div>
            <p className="text-marine-blue text-md font-bold ubuntu-regular">
              Yearly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
