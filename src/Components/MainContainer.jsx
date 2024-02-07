import { List, ListItem, Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { LuUserCircle } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar } from "@material-tailwind/react";

export default function MainContainer() {
  const [dummydata, setDummydata] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDummydata(data);
      });
  }, []);

  return (
    <>
      <div className="p-4  w-full">
        <p className=" font-bold text-2xl">Client</p>
        <div className="  w-full mt-3 ">
          {dummydata && (
            <div className="grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-8">
              {dummydata.map((user, key) => {
                return (
                  <Card key={key} className="flex flex-col p-4 card">
                    <div className="" key={user.id}>
                      <div className="flex items-center justify-left mb-3">
                        <Avatar
                          src="https://docs.material-tailwind.com/img/face-2.jpg"
                          alt="avatar"
                          className="w-[50px] h-[50px]"
                        />
                      </div>
                      <Typography className="text-ellipsis overflow-hidden">
                        {user.name}
                      </Typography>
                      <Typography className="text-ellipsis overflow-hidden">
                        {user.email}
                      </Typography>
                      <Typography className="text-ellipsis overflow-hidden">
                        {user.username}
                      </Typography>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
