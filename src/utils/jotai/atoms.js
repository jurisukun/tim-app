import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

export const openAccount = atom(false);
export const openClient = atom(false);

export const openMobileNav = atom(false);

export const openSidebar = atom(false);

export const openCasket = atom(false);
export const openFlower = atom(false);
export const openLifeInsurance = atom(false);
export const openMemorialCard = atom(false);
export const openMemorialProgram = atom(false);
export const openTodoList = atom(false);

export const sideBarProfileData = atomWithReset(null);

export const openFuneralDetails = atom(false);

export const newAccount = atomWithReset({
  firstname: null,
  lastname: null,
  username: null,
  email: null,
  password: null,
  confirmpassword: null,
  role: null,
  image_url: null,
});

export const newClient = atomWithReset({
  firstname: null,
  middlename: null,
  lastname: null,
  relationship: null,
  telephone: null,
  email: null,
  decname: null,
  servicetype: [],
  inquirystatus: null,
  notes: null,
  image_url: null,
});

export const newPrimaryIntake = atomWithReset({
  casenumber: null,
  date_of_death: null,
  died_at: null,
  apartment_number: null,
  death_place: null,
  death_city: null,
  death_state: null,
  death_zip: null,
  death_country: null,
  death_marital: null,
  nok: null,
  nok_address: null,
  beneficiary: null,
  intake_relationship: null,
  intake_email: null,
  intake_telephone: null,
  additional_contact: null,
  facial_hair: null,
  intake_notes: null,
});

export const newServiceDetails = atomWithReset({
  religion: null,
  church_affil: null,
  service_location: null,
  service_info: null,
  service_date: null,
  service_time: null,
  service_endtime: null,
  viewing_location: null,
  viewing_info: null,
  viewing_date: null,
  viewing_time: null,
  viewing_endtime: null,
  cemetery_status: null,
  cemetery_name: null,
  cemetery_info: null,
  cemetery_booking: null,
  arrival_date: null,
  arrival_time: null,
  type_of_disposition: null,
  service_notes: null,
});

export const newDailyTracker = atomWithReset({
  interaction_type: null,
  interaction_with: null,
  call_purpose: null,
  phonenumber: null,
  notes: null,
  createdBy: null,
});

export const newTask = atomWithReset({});
