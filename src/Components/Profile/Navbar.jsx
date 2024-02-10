import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function Navbar() {
  return (
    // <div className="flex items-center h-[80px] bg-orange-100">
    <>
      <div className="w-full hidden  lg:flex flex-row bbb items-center justify-evenly h-[80px] ">
        <Button>Funeral Detail</Button>
        <Button>Daily Tracker</Button>
        <Button>Email</Button>
        <Button>Tasks</Button>
        <Button>Forms</Button>
        <Button>Billing</Button>
      </div>

      <div className="w-full bbb lg:hidden  h-[80px] flex flex-row items-center justify-end ">
        <div className="flex  items-center justify-center ">
          <Menu placement="bottom-start">
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
    </>
    // </div>
  );
}

export default Navbar;
