import { Button, Form, Input, Select, DatePicker, Layout } from "antd";
import React from "react";
const { Option } = Select;
const { TextArea } = Input;
const { Header, Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 2,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select time!",
    },
  ],
};

const PrescriptionForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const url = new URL(window.location.origin);
    const data = {
      ...values,
      date: values.date.format("DD-MM-YYYY"),
    };
    Object.keys(data).forEach((key) => {
      data[key] = JSON.stringify(data[key]);
    });
    url.search = new URLSearchParams(data);
    window.open(url, "_blank").focus();
  };

  return (
    <Layout>
      <Header
        style={{
          color: "#fff",
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "2rem",
        }}
      >
        Doctor Network Management Office - Prescription
      </Header>
      <Content>
        <Form
          style={{ padding: "3rem" }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Patient Name"
            rules={[
              {
                type: "username",
                message: "The input is not valid username!",
              },
              {
                required: true,
                message: "Please input your username",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Patient's Age"
            name="age"
            rules={[{ required: true }]}
          >
            <Input type={"number"} name="age" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>
          <Form.Item name="date" label="DatePicker" {...config}>
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Associated Symptoms"
            name="notes"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} name="notes" />
          </Form.Item>

          <Form.Item
            label="Medical prescription"
            name="medicines"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} name="medicines" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Generate Prescription
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default PrescriptionForm;
