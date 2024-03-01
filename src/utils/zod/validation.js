import { z } from "zod";

export const ClientSchema = z.object({
  firstname: z.string().nullable(),
  middlename: z.string().nullable(),
  lastname: z.string().nullable(),
  relationship: z.string().nullable(),
  telephone: z.string().nullable(),
  email: z.string().nullable() || z.string().email().nullable(),
  decname: z.string().nullable(),
  servicetype: z.array(z.string()).nullable(),
  inquirystatus: z.string().nullable(),
  notes: z.string().nullable() || z.array(z.array(z.string())).nullable(),
  image_url: z.string().nullable(),
});

export const PrimaryIntakeSchema = z.object({
  casenumber: z.string().nullable(),
  date_of_death: z.string().nullable(),
  died_at: z.string().nullable(),
  apartment_number: z.string().nullable(),
  death_place: z.string().nullable(),
  death_city: z.string().nullable(),
  death_state: z.string().nullable(),
  death_zip: z.string().nullable(),
  death_country: z.string().nullable(),
  death_marital: z
    .enum(["Married but separated", "Married", "Single", "Divorced", "Widowed"])
    .nullable(),
  nok: z.string().nullable(),
  nok_address: z.string().nullable(),
  beneficiary: z.string().nullable(),
  intake_relationship: z
    .enum([
      "Self",
      "Authorized Guardian",
      "Mother",
      "Father",
      "Son",
      "Daughter",
      "Brother",
      "Sister",
      "Niece",
      "Nephew",
      "Cousin",
      "Aunt",
      "Uncle",
      "Grandparent",
      "Grandchild",
      "Wife",
      "Husband",
      "Friend",
      "Other",
    ])
    .nullable(),
  intake_email: z.string().nullable() || z.string().email().nullable(),
  intake_telephone: z.string().nullable(),
  additional_contact: z.string().nullable(),
  facial_hair: z.string().nullable(),
  intake_notes: z.string().nullable(),
});

export const ServiceDetailsSchema = z.object({
  religion: z
    .enum([
      "Christian",
      "Catholic",
      "Muslim",
      "Advantist",
      "Jehovah's Witness",
      "Other",
      "Unknown",
    ])
    .nullable(),
  church_affil: z.string().nullable(),
  service_location: z.string().nullable(),
  service_info: z.string().nullable(),
  service_date: z.string().nullable(),
  service_time: z.string().nullable(),
  service_endtime: z.string().nullable(),
  viewing_location: z.string().nullable(),
  viewing_info: z.string().nullable(),
  viewing_date: z.string().nullable(),
  viewing_time: z.string().nullable(),
  viewing_endtime: z.string().nullable(),
  cemetery_status: z
    .enum([
      "Family to Choose",
      "Family to Select",
      "Family Owns",
      "Cemetery Selected",
    ])
    .nullable(),
  cemetery_name: z.string().nullable(),
  cemetery_info: z.string().nullable(),
  cemetery_booking: z.enum(["Yes", "No", "Pending"]).nullable(),
  arrival_date: z.string().nullable(),
  arrival_time: z.string().nullable(),
  type_of_disposition: z.enum(["Burial", "Cremation", "Entombment"]).nullable(),
  service_notes: z.string().nullable(),
});

export const AccountSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "First name is required" }),
  username: z.string().min(1, { message: "First name is required" }),
  email: z.string().email({ message: "First name is required" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmpassword: z.string(6, "Password must be at least 6 characters"),
  role: z.enum([
    "ADMIN",
    "EXECUTIVE",
    "OPERATIONS",
    "EMPLOYEE",
    "CLIENT",
    "OTHER",
  ]),
  image_url: z.nullable(z.string()),
});

export const DailyTrackerSchema = z.object({
  // date: z.string(),
  // time: z.string(),
  client_id: z.string(),
  interaction_type: z.enum([
    "Call To",
    "Call From",
    "Email Exchange",
    "Meeting with",
  ]),
  interaction_with: z.string(),
  call_purpose: z.string(),
  phone_number: z.string(),
  notes: z.string().nullable().optional(),
  createdBy: z.string().nullable().optional(),
});

export const LifeInsuranceSchema = z.object({
  insurancestatus: z.enum(["YES", "NO"]),
  assignments: z.enum(["SINGLE", "MULTIPLE"]),
  assignmentlink: z.string(),
  claimformlink: z.string(),
  decedentname: z.string(),
  insurancename: z.string(),
  telephone: z.string(),
  policynumber: z.string(),
  ssn: z.string(),
  claimnumber: z.string(),
  beneficiaries: z.array(z.string().optional()),
  contacted: z.enum(["YES", "NO"]),
  contactdate: z.date(),
  requestassignmentform: z.enum(["YES", "NO"]),
  requestassigmenttype: z.enum(["COPIES", "ORIGINAL"]),
  requestclaimform: z.enum(["YES", "NO"]),
  requestclaimformtype: z.enum(["COPIES", "ORIGINAL"]),
  requestdeathcertificate: z.enum(["YES", "NO"]),
  requestdeathcerificatetype: z.enum(["COPIES", "ORIGINAL"]),
  mailinginfo: z.string(),
  datesentdocuments: z.date(),
  datepaymentreceived: z.date(),
  sendmethod: z.enum([
    "MAIL",
    "FAX",
    "EMAIL",
    "MAIL_AND_FAX",
    "MAIL_FAX_AND_EMAIL",
  ]),
  notes: z.string().nullable().optional(),
});

export const MemorialCardSchema = z.object({
  withmemorialcard: z.enum(["YES", "NO"]),
  photo: z.string(),
  scripture: z.string(),
  designed: z.enum(["Not Started", "In progress", "Completed"]),
  language: z.enum(["English", "French", "English and French"]),

  printed: z.enum(["Not Started", "In progress", "Completed"]),
  laminated: z.enum(["Not Started", "In progress", "Completed"]),
  quantity: z.number(),
  notes: z.string().nullable().optional(),
});

export const MemorialProgramSchema = z.object({
  withmemorialprogram: z.enum(["YES", "NO"]),
  photo: z.string(),
  serviceorder: z.string(),
  obituary: z.string(),
  designed: z.enum(["Not Started", "In progress", "Completed"]),
  printed: z.enum(["Not Started", "In progress", "Completed"]),
  quantity: z.number(),
  notes: z.string().nullable().optional(),
});

export const CasketUrnMerchSchema = z.object({
  selectedcasket: z.string(),
  updatedcasket: z.string(),
  orderplaced: z.string(),
  specialinstructions: z.string(),
  urninformation: z.string(),
  urnmodel: z.string(),
  company: z.string(),
  notes: z.string().nullable().optional(),
});

export const FlowerInstructionsSchema = z.object({
  type: z.enum(["Casket Spray", "Standing Spray"]),
  ribbon: z.string(),
  colors: z.string(),
  specialinstructions: z.string(),
  additionaltype: z.string(),
  additionalribbon: z.string(),
  additionalcolors: z.string(),
  additionalinstructions: z.string(),
  florist: z.string(),
  ordernumber: z.string(),
  notes: z.string().nullable().optional(),
});

export const ToDoListSchema = z.object({
  photoscripure: z.date(),
  pickupdropoff: z.date(),
  programinfo: z.date(),
  paymentdate: z.date(),
  total: z.number(),
  printed: z.enum(["Not Started", "In progress", "Completed"]),
  paymenthmethod: z.enum(["Cash", "Bank Certified Check"]),
  notes: z.string(),
});

export const TaskSchema = z.object({
  desc: z.string(),
  due_date: z.string(),
  status: z.enum(["Pending", "In progress", "Completed", "Blocked"]),
  assigned_to: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  createdBy: z.string(),
});
