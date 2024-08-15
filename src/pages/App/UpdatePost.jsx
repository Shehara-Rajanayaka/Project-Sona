import React from "react";
import { NavbarDefault } from "../../components";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Input,
  Select,
  Option,
  Textarea,
  Button,
} from "@material-tailwind/react";
// import Footer from "../../components";

const UpdatePost = () => {
  return (
    <div className="h-[100vh]">
      <NavbarDefault />
      <div>
        
        <div className="mx-auto max-w-screen-md py-2 px-12">
        <Typography className="font-black text-4xl my-10">Update Post</Typography>
          <div>
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-0">
                    <Avatar
                      size="sm"
                      src="/img/team-1.jpg"
                      alt="user 1"
                      withBorder
                    />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Venura Prabath
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <div className="flex flex-col gap-4">
                    <Input label="Set Title..." />

                    <Select label="Select Type" className="">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>

                    <Select label="Select Category">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>

                    <Select label="Select Tag">
                      <Option>Material Tailwind HTML</Option>
                      <Option>Material Tailwind React</Option>
                      <Option>Material Tailwind Vue</Option>
                      <Option>Material Tailwind Angular</Option>
                      <Option>Material Tailwind Svelte</Option>
                    </Select>

                    <Textarea label="Bio" />
                    <img
                      className="h-96 w-full rounded-lg object-cover object-center"
                      src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                      alt="nature image"
                    />
                    <Button>Discard</Button>
                    <Button variant="outlined">Update Post</Button>
                  </div>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default UpdatePost;