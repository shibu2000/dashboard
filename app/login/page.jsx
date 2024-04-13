import LoginForm from "../ui/dashboard/login/loginForm";
import { authenticate } from "../lib/action/userAction";
const Login = () => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <LoginForm authenticate={authenticate} />
    </div>
  );
};

export default Login;
