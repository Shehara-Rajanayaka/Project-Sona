import React from "react";
import { NavbarDefault } from "../../components";
// import Footer from "../components";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Select,
  Option,
  Textarea,
  Avatar,
} from "@material-tailwind/react";

const EditProfile = () => {
  return (
    <div className="">
      <NavbarDefault />
      <div className="flex justify-center items-center my-10">
        <Card className="w-96">
          <Typography variant="h3" className="text-center text-black mt-5">
            Update Profile
          </Typography>
          <div className="flex justify-center">
            <Avatar src="/img/face-2.jpg" alt="avatar" size="xxl" className="bg-black"/>
          </div>
          <span className="text-center font-medium">maduka@gmail.com</span>
          <span className="text-center font-medium">0727533679</span>
          <CardBody className="flex flex-col gap-4">
            <Input label="First Name" size="lg" variant="outlined" />
            <Input label="Last Name" size="lg" variant="outlined" />
            <Input label="Username" size="lg" variant="outlined" />
            <Select label="Select City">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
            <Textarea label="Bio" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Update Profile
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EditProfile;