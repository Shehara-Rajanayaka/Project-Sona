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
  Textarea,
  Avatar,
  Chip,
  Button,
} from "@material-tailwind/react";

const Comments = () => {
  return (
    <div className="h-[100vh] ">
      <NavbarDefault />
      <div className="mx-auto max-w-screen-md py-12 px-12">
        <div>
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="md"
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
                <div className="flex justify-between mb-5">
                  <button className="mt-3 font-medium">10 Comments</button>
                  <Typography className="mt-3 font-medium">10 Votes</Typography>
                </div>
                <div className="flex gap-3">
                  <TimelineIcon className="p-0">
                    <Avatar
                      size="sm"
                      src="/img/team-1.jpg"
                      alt="user 1"
                      withBorder
                    />
                  </TimelineIcon>
                  <Textarea label="Add New Comment" />
                </div>
                <Button className="mt-5 mx-5 w-full">Comment</Button>
                <div className="mt-10">
                  <span>Comments</span>
                  <div className="mx-auto max-w-screen-md py-3 px-5">
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
                              <div className="flex gap-2">
                                <Chip value="Delete" />
                                <Chip value="Helpfull" />
                              </div>
                            </div>
                          </TimelineHeader>

                          <TimelineBody className="pb-8">
                            <Typography
                              color="gary"
                              className="font-normal text-gray-600"
                            >
                              The key to more success is to have a lot of
                              pillows. Put it this way, it took me twenty five
                              years to get these plants, twenty five years of
                              blood sweat and tears, and I&apos;m never giving
                              up, I&apos;m just getting started. I&apos;m up to
                              something. Fan luv.
                            </Typography>
                          </TimelineBody>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  </div>
                  <div className="mx-auto max-w-screen-md py-3 px-5">
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
                            <div className="flex gap-64 my-3">
                              <Typography variant="h5" color="blue-gray">
                                Venura Prabath
                              </Typography>
                              <Chip value="Helpfull" />
                            </div>
                          </TimelineHeader>

                          <TimelineBody className="pb-8">
                            <Typography
                              color="gary"
                              className="font-normal text-gray-600"
                            >
                              The key to more success is to have a lot of
                              pillows. Put it this way, it took me twenty five
                              years to get these plants, twenty five years of
                              blood sweat and tears, and I&apos;m never giving
                              up, I&apos;m just getting started. I&apos;m up to
                              something. Fan luv.
                            </Typography>
                            <div className="mx-40 my-10">
                              <Button variant="outlined">
                                Load More ...
                              </Button>
                            </div>
                          </TimelineBody>
                        </TimelineItem>
                      </Timeline>
                    </div>
                  </div>
                </div>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Comments;