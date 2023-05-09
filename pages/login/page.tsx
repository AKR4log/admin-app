import AuthContainer from "@/lib/components/auth/container";
import { useTypedSelector } from "@/lib/hooks/useTypedSelector";

const LoginPage = () => {
  const auth = useTypedSelector((state) => state.auth.auth);
  return (
      <AuthContainer isAuthUser={auth}/>
  );
};

export default LoginPage;
