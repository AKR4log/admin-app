import { useTypedSelector } from "@/lib/hooks/useTypedSelector";
import LoginPage from "@/pages/login/page";
import { Main } from "next/document";

export default async function Home() {
  const auth = useTypedSelector((state) => state.auth.auth);
  return <main>{auth.length !== 0 ? <Main /> : <LoginPage />}</main>;
}
