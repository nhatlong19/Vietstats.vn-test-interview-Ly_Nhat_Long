"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Checkbox, Form, Input } from "antd";
import { SwitchLanguage } from "../SwitchLanguage";

type FieldType = {
  usedId?: string;
  password?: string;
};

export default function LoginForm() {
  const router = useRouter();
  return (
    <div className="loginForm">
      <div className="form">
        <div className="formTitle">Sign In</div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={() => {
            router.push("/");
          }}
        >
          <Form.Item<FieldType> label="User ID" name="usedId">
            <Input className="userInput" />
          </Form.Item>

          <Form.Item<FieldType> label="Password" name="password">
            <Input.Password className="passInput" />
          </Form.Item>

          <Button type="primary" htmlType="submit" className="signInBtn">
            SIGN IN
          </Button>
        </Form>
      </div>
      <div className="other">
        <SwitchLanguage />
        <div className="bg"></div>
        <Image
          className="otherImage"
          src="/images/1.png"
          alt="en"
          width={291}
          height={228}
        />
      </div>
    </div>
  );
}
