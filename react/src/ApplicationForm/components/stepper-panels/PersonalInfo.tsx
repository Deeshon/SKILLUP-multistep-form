/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";

const PersonalInfo = () => {
  const validatePhoneNumber = (_: any, value: string) => {
    if (!value) {
      return Promise.reject("Please enter your phone number");
    }

    const phoneNumberRegex = /^0\d{9}$/;
    if (!phoneNumberRegex.test(value)) {
      return Promise.reject(
        "Please enter a valid phone number matching the regex (^0\\d{9}$) "
      );
    }

    return Promise.resolve();
  };

  return (
    <div>
      <div className="ubuntu-regular">
        <h1 className="text-2xl font-bold text-marine-blue">Personal Info</h1>
        <h2 className="pt-2 text-gray-400 text-lg">
          Please provide your name, email, address and phone number.
        </h2>
      </div>
      <div className="mt-10 sm:mt-2">
        <Form.Item
          label="Name"
          name={['personalInfo', "name"]}
          rules={[
            {
              required: true,
              message: "Please enter your name.",
            },
          ]}
          className="font-bold"
        >
          <Input placeholder="John Doe" className="h-10" />
        </Form.Item>
        <Form.Item
          label="Email"
          name={['personalInfo', "email"]}
          rules={[
            {
              required: true,
              message: "Please enter your email.",
            },
            {
              type: "email",
              message: "Please enter a valid email.",
            },
          ]}
          className="font-bold"
        >
          <Input placeholder="johndoe@gmail.com" className="h-10" />
        </Form.Item>
        <Form.Item
          label="Address"
          name={['personalInfo', "address"]}
          rules={[
            {
              required: true,
              message: "Please enter your address.",
            },
          ]}
          className="font-bold"
        >
          <Input placeholder="318/A Mulberry Street" className="h-10" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name={['personalInfo', "phoneNumber"]}
          rules={[
            {
              validator: validatePhoneNumber,
            },
          ]}
          className="font-bold"
        >
          <Input placeholder="074 354 6343" className="h-10" />
        </Form.Item>
      </div>
    </div>
  );
};

export default PersonalInfo;
