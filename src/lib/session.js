"use server";
import { cookies } from "next/headers";

const TokenKey = "login-template-token";

export async function setToken(token) {
  cookies().set(TokenKey, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function getToken() {
  return cookies().get(TokenKey);
}

export async function removeToken() {
  cookies().remove(TokenKey);
}
