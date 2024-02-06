import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { LuUserCircle } from "react-icons/lu";
import { SlOptionsVertical } from "react-icons/sl";

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
      <p>Content</p>
      <div className="w-full">
        <p>Users</p>
        {dummydata && (
          <List className="gap-3">
            {dummydata.map((user, key) => {
              return (
                <Card key={key} className="w-full">
                  <ListItem
                    className="flex flex-row gap-8 item-center justify-start h-14"
                    key={user.id}
                  >
                    <LuUserCircle size={34} />
                    <p className="w-[20%]"> {user.name}</p>
                    <p className="w-[20%]"> {user.email}</p>
                    <p className="w-[20%]"> {user.username}</p>
                    <SlOptionsVertical className="self-end" />
                  </ListItem>
                </Card>
              );
            })}
          </List>
        )}
      </div>
    </>
  );
}
