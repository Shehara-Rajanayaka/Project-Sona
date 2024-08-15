import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { AuthHeader, Footer } from '../../components';
import { login } from '../../store/authSlice/service';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user);
  const [loginInput,setLoginInput] = React.useState({username:"",password:""});
  return (
    <div>
    <AuthHeader />
    <div className="flex justify-center items-center h-[100vh]">
      <Card className="w-96">
        <Typography variant="h3" className="text-center text-black mt-5">
          Sign In
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input label="Username or Email" size="lg" variant="outlined" />
          <Input label="Password" size="lg" variant="outlined" />
          {/* <div className="-ml-2.5">
        <Checkbox label="Remember Me" />
      </div> */}
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" onClick={()=>dispatch(login(loginInput))} fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="a"
              href="/register"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              Sign up
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
    <Footer />
  </div>
  )
}

export default Login