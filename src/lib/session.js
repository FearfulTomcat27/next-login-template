import "server-only";
import { cookies } from "next/headers";

const TokenKey = "login-template-token";

export function setToken(token) {
  cookies().set(TokenKey, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export function getToken() {
  return cookies().get(TokenKey);
}

export function removeToken() {
  cookies().remove(TokenKey);
}
