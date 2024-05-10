"use client";

import Image from "next/image";
import LoginForm from "./components/user-login-form";
import Link from "next/link";
import Logo from "@/assets/next.svg";

const Login = () => {
  return (
    <>
      <div className="w-full bg-secondary min-h-screen grid">
        <div className="flex justify-center items-center">
          <div className="flex max-w-[400px] bg-background gap-5 p-10 shadow-md rounded-2xl flex-col justify-center">
            <div className="flex flex-col gap-2 text-center">
              <Image
                className="mx-auto"
                alt="Logo"
                src={Logo}
                width={100}
                height={100}
              />
              <h1 className="text-2xl font-semibold">登录账户</h1>
              <p className="text-sm text-muted-foreground">
                请在下方输入您的账户信息。
              </p>
            </div>
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              点击继续，即表示您同意我们的{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                服务条款
              </Link>{" "}
              和{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                隐私政策。
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
