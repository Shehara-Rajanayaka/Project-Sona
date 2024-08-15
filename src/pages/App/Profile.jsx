import React from "react";
import { NavbarDefault } from "../../components";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Chip,
} from "@material-tailwind/react";
// import Footer from '../components'

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ProfilePage = () => {
  return (
    <div className="h-[100vh]">
      <NavbarDefault />
      <div className="flex flex-row my-6">
        <div className="w-full">
          <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem] ml-20"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
              <Avatar
                size="lg"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Profile
                  </Typography>
                </div>
                <Typography color="blue-gray">Maduka Weerasinghe</Typography>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full">
          <CardBody className="mb-6 ml-32">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I
              use them as a freelancer in my hobby projects for fun! And its
              really affordable, very humble guys !!!&quot;
            </Typography>
          </CardBody>
        </div>
        <div className="w-full">
          <div className="ml-40">
            <span>maduka_weerasinghe</span>
            <br />
            <span>madukaweerasinghe0m@gmail.com</span>
            <br />
            <span>0770283668</span>
            <br />
            <span>Male</span>
            <br />
            <span>Kandy</span>
          </div>
        </div>
      </div>
      <hr className="border border-black" />
      <div className="flex flex-row p-5 gap-48">
        <div className="w-full mt-2">
          <span className="font-bold mt-2 ml-16">My Post</span>
        </div>
        <div className="w-full">
          <Button className="ml-96">+ Create Post</Button>
        </div>
      </div>
      <hr className="border border-black" />
      <div className="mx-auto max-w-screen-md py-12 px-12">
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
                <div className="flex gap-44 my-3">
                  <Typography variant="h5" color="blue-gray">
                    Venura Prabath
                  </Typography>
                  <div className="flex gap-2 mx-0">
                    <Button variant="outlined">Edit</Button>
                    <Button className="bg-gray-400 text-black border border-black">
                      Delete
                    </Button>
                  </div>
                </div>
              </TimelineHeader>
              <div className="flex gap-2 mx-12 mb-3">
                <Chip value="Need Help" />
                <Chip value="Urgant" color="red" />
              </div>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
                <div className="flex justify-between">
                  <button className="mt-3 font-medium">10 Comments</button>
                  <Typography className="mt-3 font-medium">10 Votes</Typography>
                </div>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md py-2 px-12">
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
                <div className="flex gap-44 my-3">
                  <Typography variant="h5" color="blue-gray">
                    Venura Prabath
                  </Typography>
                  <div className="flex gap-2 mx-0">
                    <Button variant="outlined">Edit</Button>
                    <Button className="bg-gray-400 text-black border border-black">
                      Delete
                    </Button>
                  </div>
                </div>
              </TimelineHeader>
              <div className="flex gap-2 mx-12 mb-3">
                <Chip value="Need Help" />
                <Chip value="Urgant" color="red" />
              </div>
              <TimelineBody className="pb-8 ">
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
                <Card className="mt-12 overflow-hidden">
                  <img
                    alt="nature"
                    className="h-[32rem] w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                  />
                </Card>
                <div className="flex justify-between">
                  <button className="mt-3 font-medium">10 Comments</button>
                  <Typography className="mt-3 font-medium">10 Votes</Typography>
                </div>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;