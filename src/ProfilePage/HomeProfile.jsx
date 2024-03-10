import Sidebar from "../Components/Profile/SidebarProfile";
import Navbar from "../Components/Profile/Navbar";
import { Outlet } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { customfetch } from "../lib/fetchhandler/requestHandler";
import { LoadingScreen } from "../CheckAuth/CheckAuth";
import ErrorPage from "../Components/ErrorPage";

import {
  openClient,
  sideBarProfileData,
  openCasket,
  openFlower,
  openLifeInsurance,
  openMemorialCard,
  openMemorialProgram,
  openTodoList,
} from "../utils/jotai/atoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import AddClient from "../Components/Account/AddClient";
import Casket from "../Components/Profile/ProfileDetails/Casket";
import Flower from "../Components/Profile/ProfileDetails/Flower";
import LifeInsurance from "../Components/Profile/ProfileDetails/LifeInsurance";
import MemorialCard from "../Components/Profile/ProfileDetails/MemorialCard";
import MemorialProgram from "../Components/Profile/ProfileDetails/MemorialProgram";
import TodoList from "../Components/Profile/ProfileDetails/TodoList";
import { LoginCheck } from "../LoginPage/loginPage";

function HomeProfile() {
  const { clientId } = useParams();
  const openclient = useAtomValue(openClient);
  const opencasket = useAtomValue(openCasket);
  const openflower = useAtomValue(openFlower);
  const openlifeinsurance = useAtomValue(openLifeInsurance);
  const openmemorialcard = useAtomValue(openMemorialCard);
  const openmemorialprogram = useAtomValue(openMemorialProgram);
  const opentodolist = useAtomValue(openTodoList);

  const setsidebarprofiledata = useSetAtom(sideBarProfileData);
  const defaultdata = useAtomValue(sideBarProfileData);

  // useEffect(() => {
  //   return () => {
  //     setsidebarprofiledata(RESET);
  //   };
  // }, []);

  if (!clientId) return (window.location.href = "/dashboard/client");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["clientprofile", clientId],
    queryFn: async () => {
      const result = await customfetch(
        import.meta.env.VITE_API_URL + `/clients/${clientId}`,
        "GET"
      );

      return result?.data;
    },
  });

  if (isLoading) return <LoadingScreen />;

  if (isError) return <LoginCheck />;

  return (
    <div className="flex h-[100vh] overflow-hidden relative ">
      {openclient && <AddClient />}
      {opencasket && <Casket />}
      {openflower && <Flower />}
      {openlifeinsurance && <LifeInsurance />}
      {openmemorialcard && <MemorialCard />}
      {openmemorialprogram && <MemorialProgram />}
      {opentodolist && <TodoList />}

      <Sidebar defaultdata={data?.client} />

      <div className="w-full ">
        <div className="w-[100%] h-auto relative">
          <Navbar />
        </div>
        <main className="height-e ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HomeProfile;
