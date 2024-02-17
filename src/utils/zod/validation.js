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
  date_of_death: z.date().nullable(),
  died_at: z.string().nullable(),
  apartment_number: z.string().nullable(),
  death_place: z.string().nullable(),
  death_city: z.string().nullable(),
  death_state: z.string().nullable(),
  death_zip: z.string().nullable(),
  death_country: z.string().nullable(),
  death_marital: z
    .enum(["MARRIED_SEPARATED", "MARRIED", "SINGLE", "DIVORCED", "WIDOWED"])
    .nullable(),
  nok: z.string().nullable(),
  nok_address: z.string().nullable(),
  beneficiary: z.string().nullable(),
  intake_relationship: z
    .enum([
      "SELF",
      "GUARDIAN",
      "MOTHER",
      "FATHER",
      "SON",
      "DAUGHTER",
      "BROTHER",
      "SISTER",
      "NIECE",
      "NEPHEW",
      "COUSIN",
      "AUNT",
      "UNCLE",
      "GRANDPARENT",
      "GRANDCHILD",
      "WIFE",
      "HUSBAND",
      "FRIEND",
      "OTHER",
    ])
    .nullable(),
  intake_email: z.string().nullable() || z.string().email().nullable(),
  intake_telephone: z.string().nullable(),
  additional_contact: z.array(z.string()).nullable(),
  facial_hair: z.string().nullable(),
  intake_notes: z.string().nullable(),
});

export const ServiceDetailsSchema = z.object({
  religion: z
    .enum([
      "CHRISTIAN",
      "CATOLIC",
      "MUSLIM",
      "ADVENTIST",
      "JEHOVAH_WITNESS",
      "OTHER",
      "UNKNOWN",
    ])
    .nullable(),
  church_affil: z.string().nullable(),
  service_location: z.string().nullable(),
  service_info: z.string().nullable(),
  service_date: z.date().nullable(),
  service_time: z.string().nullable(),
  service_endtime: z.string().nullable(),
  viewing_location: z.string().nullable(),
  viewing_info: z.string().nullable(),
  viewing_date: z.date().nullable(),
  viewing_time: z.string().nullable(),
  viewing_endtime: z.string().nullable(),
  cemetery_status: z
    .enum([
      "FAMILY_TO_CHOOSE",
      "FAMILIY_TO_SELECT",
      "FAMILY_OWNS",
      "CEMETERY_SELECTED",
    ])
    .nullable(),
  cemetery_name: z.string().nullable(),
  cemetery_info: z.string().nullable(),
  cemetery_booking: z.enum(["YES", "NO", "PENDING"]).nullable(),
  arrival_date: z.date().nullable(),
  arrival_time: z.string().nullable(),
  type_of_disposition: z
    .enum(["BURIAL", "ENTOMBMENT", "CREMATION", "OTHER"])
    .nullable(),
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
  interaction_type: z.enum([
    "CALL_TO",
    "CALL_FROM",
    "EMAIL_EXCHANGE",
    "MEETING_WITH",
  ]),
  interaction_with: z.string(),
  call_purpose: z.string(),
  phonenumber: z.string(),
  notes: z.string(),
  createdBy: z.string(),
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
  designed: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]),
  language: z.enum(["ENGLISH", "FRENCH", "ENGLISH_AND_FRENCH"]),

  printed: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]),
  laminated: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]),
  quantity: z.number(),
  notes: z.string().nullable().optional(),
});

export const MemorialProgramSchema = z.object({
  withmemorialprogram: z.enum(["YES", "NO"]),
  photo: z.string(),
  serviceorder: z.string(),
  obituary: z.string(),
  designed: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]),
  printed: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED"]),
  quantity: z.number(),
  notes: z.string().nullable().optional(),
});
