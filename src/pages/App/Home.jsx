import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { Footer, NavbarDefault } from "../../components";

const Home = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="h-[100vh] w-full overflow-scroll ">
        <NavbarDefault />
      {/* <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar> */}
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
                <Typography variant="h5" color="blue-gray">
                  Timeline Title Here.
                  <div className="flex gap-2 my-3">
                    <Chip value="Need Help" />
                    <Chip value="Urgant" color="red" />
                  </div>
                </Typography>
              </TimelineHeader>

              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="flex justify-between">
          <button className="mt-3 font-medium">10 Comments</button>
          <Typography className="mt-3 font-medium">10 Votes</Typography>
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
                <Typography variant="h5" color="blue-gray">
                  Timeline Title Here.
                  <div className="flex gap-2 my-3">
                    <Chip value="Need Help" />
                    <Chip value="Urgant" color="red" />
                  </div>
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
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
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="flex justify-between">
          <button className="mt-3 font-medium">10 Comments</button>
          <Typography className="mt-3 font-medium">10 Votes</Typography>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md py-12 px-12 mb-10">
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
                  Timeline Title Here.
                  <div className="flex gap-2 my-3">
                    <Chip value="Need Help" />
                    <Chip value="Urgant" color="red" />
                  </div>
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gary" className="font-normal text-gray-600">
                  The key to more success is to have a lot of pillows. Put it
                  this way, it took me twenty five years to get these plants,
                  twenty five years of blood sweat and tears, and I&apos;m never
                  giving up, I&apos;m just getting started. I&apos;m up to
                  something. Fan luv.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="flex justify-between">
          <button className="mt-3 font-medium">10 Comments</button>
          <Typography className="mt-3 font-medium">10 Votes</Typography>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;