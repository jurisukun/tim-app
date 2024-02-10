import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function Navbar() {
  return (
    <div className="flex items-center h-[80px]">
      <div className="w-full bbb hidden lg:block  h-[80px]">
        <div className="h-full lg:flex flex-row items-center justify-evenly ">
          <Button className="bg-red-800">Funeral Detail</Button>
          <Button className="bg-red-800">Daily Tracker</Button>
          <Button className="bg-red-800">Email</Button>
          <Button className="bg-red-800">Tasks</Button>
          <Button className="bg-red-800">Forms</Button>
          <Button className="bg-red-800">Billing</Button>
        </div>
      </div>
      <div className="w-full bbb lg:hidden block h-[80px]">
        <div className="m-5 protest-riot-regular md:text-3xl text-2xl">
          Funeral System
        </div>
        <div className="flex absolute top-3 right-20 items-center justify-center">
          <Menu placement="left-start">
            <MenuHandler>
              <Button>Menu</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Funeral Details</MenuItem>
              <MenuItem>Daily Tracker</MenuItem>
              <MenuItem>Email</MenuItem>
              <MenuItem>Tasks</MenuItem>
              <MenuItem>Forms</MenuItem>
              <MenuItem>Billing</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
