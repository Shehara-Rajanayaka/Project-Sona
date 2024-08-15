import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { AuthHeader, Footer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../store/authSlice/service';

const Register = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const [registerInput, setRegisterInput] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    gender: "",
    city: "",
  });
  React.useEffect(() => {
    // console.log('test')
    dispatch(getCities())
    // console.log(auth.cityList);
  }, []);

  return (
    <div>
      <AuthHeader />
      <div className="flex justify-center items-center my-10">
        <Card className="w-96">
          <Typography variant="h3" className="text-center text-black mt-5">
            Sign Up
          </Typography>
          <CardBody className="flex flex-col gap-4">
            <Input onChange={e => setRegisterInput({ ...registerInput, firstName: e.target.value })} label="First Name" size="lg" variant="outlined" />
            <Input onChange={e => setRegisterInput({ ...registerInput, lastName: e.target.value })} label="Last Name" size="lg" variant="outlined" />
            <Input onChange={e => setRegisterInput({ ...registerInput, username: e.target.value })} label="Username" size="lg" variant="outlined" />
            <Input onChange={e => setRegisterInput({ ...registerInput, email: e.target.value })} label="Email" size="lg" variant="outlined" />
            <Input onChange={e => setRegisterInput({ ...registerInput, password: e.target.value })} label="Password" size="lg" variant="outlined" />
            <Input onChange={e => setRegisterInput({ ...registerInput, mobile: e.target.value })} label="Mobile" size="lg" variant="outlined" />
            <Typography className="font-normal mx-3">Gender</Typography>
            <div className="flex gap-10">
              <Radio onChange={e => setRegisterInput({ ...registerInput, gender: e.target.value })} value={"male"} name="type" label="male" defaultChecked />
              <Radio onChange={e => setRegisterInput({ ...registerInput, gender: e.target.value })} value={"female"} name="type" label="female" />
            </div>
            <Typography className="font-normal mx-3">City</Typography>
            <Select id='selectBox' onChange={e=>console.log(e.target.value)} label="Select Version">
              <Option  value='i'>test</Option>
              <Option  value='i'>test</Option>
            </Select>
            {/* <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={() => console.log(registerInput)} fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="/login"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign In
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default Register