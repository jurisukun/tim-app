import {
  Button,
  Input,
  Typography,
  Checkbox,
  Select,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

import { useState } from "react";

import file1 from "../../utils/Files/Bereavement Flight Request Letter.pdf";
import file2 from "../../utils/Files/Blank Contract.pdf";
import file3 from "../../utils/Files/Clothing _ Belongings Checklist.pdf";
import file4 from "../../utils/Files/Excusal Letter.pdf";
import file5 from "../../utils/Files/Flight Itinerary.pdf";
import file6 from "../../utils/Files/Funeral-Service-Arrangement-Forms.pdf";
import file7 from "../../utils/Files/Medical Contingency Letter.pdf";
import file8 from "../../utils/Files/NO PICTURES AT FUNERAL .pdf";
import file9 from "../../utils/Files/Pre-need Casket agreement and guarantee.pdf";
import file10 from "../../utils/Files/Receipt Template.pdf";
import file11 from "../../utils/Files/STATEMENT OF AUTHORITY.pdf";

import file12 from "../../utils/Files/Assignment Form/Assignment Form for multiple beneficiaries.pdf";
import file13 from "../../utils/Files/Assignment Form/Assignment Form.pdf";

import file14 from "../../utils/Files/Funeral Service Arrangement Forms/1 Funeral Service Record Sheet.pdf";
import file15 from "../../utils/Files/Funeral Service Arrangement Forms/2 Authorization for Removal Embalming Preparation.pdf";
import file16 from "../../utils/Files/Funeral Service Arrangement Forms/3 Control of disposition form.pdf";
import file17 from "../../utils/Files/Funeral Service Arrangement Forms/4 At Need Written Statement Of Person Having the Right to Control Disposition.pdf";
import file18 from "../../utils/Files/Funeral Service Arrangement Forms/5 Website Agreement.pdf";

import file19 from "../../utils/Files/Visa Requests/Canada Visa Request .pdf";
import file20 from "../../utils/Files/Visa Requests/Visa Request Template(Chile).pdf";
import file21 from "../../utils/Files/Visa Requests/Visa Request Template(Colombia).pdf";
import file22 from "../../utils/Files/Visa Requests/Visa Request Template(DR).pdf";
import file23 from "../../utils/Files/Visa Requests/Visa Request Template(France).pdf";
import file24 from "../../utils/Files/Visa Requests/Visa Request Template(Guyana).pdf";
import file25 from "../../utils/Files/Visa Requests/Visa Request Template(Haiti).pdf";
import file26 from "../../utils/Files/Visa Requests/Visa Request Template(Jamaica).pdf";
import file27 from "../../utils/Files/Visa Requests/Visa Request Template(London).pdf";
import file28 from "../../utils/Files/Visa Requests/Visa Request Template(Panama).pdf";
import file29 from "../../utils/Files/Visa Requests/Visa Request Template(Paris).pdf";
import file30 from "../../utils/Files/Visa Requests/Visa Request(Nicolas Laguerre).pdf";

import file31 from "../../utils/Files/SSA-721.pdf";
import file32 from "../../utils/Files/Limo Itinerary.pdf";

import { PDFDocument } from "pdf-lib";

const formData = [
  file1,
  file2,
  file3,
  file4,
  file5,
  file6,
  file7,
  file8,
  file9,
  file10,
  file11,
  file31,
  file32,
];

const assignmentforms = [file12, file13];

const funeralservice = [file14, file15, file16, file17, file18];
const visaforms = [
  file19,
  file20,
  file21,
  file22,
  file23,
  file24,
  file25,
  file26,
  file27,
  file28,
  file29,
  file30,
];

const files = [
  { label: "Bereavement Flight Request Letter", value: file1 },
  { label: "Blank Contract", value: file2 },
  { label: "Clothing Belongings Checklist", value: file3 },
  { label: "Excusal Letter", value: file4 },
  { label: "Flight Itinerary", value: file5 },
  { label: "Funeral Service Arrangement Forms", value: file6 },
  { label: "Medical Contingency Letter", value: file7 },
  { label: "No Pictures at Funeral", value: file8 },
  { label: "Pre-need Casket Agreement and Guarantee", value: file9 },
  { label: "Receipt Template", value: file10 },
  { label: "Statement of Authority", value: file11 },
  { label: "SSA-721", value: file31 },
  { label: "Limo Itinerary", value: file32 },
];

const forms = [
  { label: "Assignment Form for Multiple Beneficiaries", value: file12 },
  { label: "Assignment Form", value: file13 },
];

const visa = [
  { label: "Canada Visa Request", value: file19 },
  { label: "Visa Request (Chile)", value: file20 },
  { label: "Visa Request (Colombia)", value: file21 },
  { label: "Visa Request (DR)", value: file22 },
  { label: "Visa Request (France)", value: file23 },
  { label: "Visa Request (Guyana)", value: file24 },
  { label: "Visa Request (Haiti)", value: file25 },
  { label: "Visa Request (Jamaica)", value: file26 },
  { label: "Visa Request (London)", value: file27 },
  { label: "Visa Request (Panama)", value: file28 },
  { label: "Visa Request (Paris)", value: file29 },
  { label: "Visa Request (Nicolas Laguerre)", value: file30 },
];

const funeralService = [
  { label: "Funeral Service Record Sheet", value: file14 },
  { label: "Authorization for Removal Embalming Preparation", value: file15 },
  { label: "Control of Disposition Form", value: file16 },
  {
    label:
      "At Need Written Statement Of Person Having the Right to Control Disposition",
    value: file17,
  },
  { label: "Website Agreement", value: file18 },
];

function FormPopover({ title, data, statevalue, setStatevalue }) {
  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <Button
          size="sm"
          className="bg-blue-gray-500 line-clamp-1 text-ellipsis min-w-[100px] max-w-[100px] "
        >
          {title}
        </Button>
      </PopoverHandler>
      <PopoverContent className="overflow-y-scroll p-4">
        <div className="  h-auto max-h-[250px] w-[250px]  rounded-lg z-10">
          {data.map((file, key) => (
            <div key={key} className="flex items-center">
              <Checkbox
                className=""
                label={file.label}
                defaultChecked={statevalue?.includes(file)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setStatevalue([...statevalue, file]);
                  } else {
                    setStatevalue(statevalue.filter((item) => item !== file));
                  }
                }}
              />
            </div>
          ))}
          <Button size="sm" className="my-4 bg-black/80">
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function Forms() {
  const [checkedFiles, setCheckedFiles] = useState([]);

  const generateBlob = async (arroffiles) => {
    console.log(arroffiles);
    let arrBlob = [];
    for (let i = 0; i < arroffiles.length; i++) {
      const response = await fetch(arroffiles[i]?.value);
      const data = await response.blob();
      const toFile = new File([data], arroffiles[i]?.label, {
        type: "application/pdf",
      });
      arrBlob.push(toFile);
    }

    console.log(arrBlob);
    generateArrayBuffer(arrBlob);
  };

  const generateArrayBuffer = async (arrofbuffers) => {
    let arrayBlob = [];

    for (let i = 0; i < arrofbuffers.length; i++) {
      arrayBlob[i] = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(arrofbuffers[i]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    }
    for (let i = 0; i < arrayBlob.length; i++) {
      const pdfDoc = await PDFDocument.load(arrayBlob[i]);

      const form = pdfDoc.getForm();
      const fields = form.getFields();
      console.log(fields);
    }
  };

  return (
    <div className="w-full height-e ">
      <div className="flex md:flex-row flex-col gap-2 items-center w-full">
        <div className="flex gap-2 w-full md:max-w-[65%]">
          <div className=" p-2 flex flex-row flex-wrap gap-2 relative  items-center ">
            <FormPopover
              title="Files"
              data={files}
              statevalue={checkedFiles}
              setStatevalue={setCheckedFiles}
            />
            <FormPopover
              title="Form"
              data={forms}
              statevalue={checkedFiles}
              setStatevalue={setCheckedFiles}
            />
            <FormPopover
              title="Funeral  "
              data={funeralService}
              statevalue={checkedFiles}
              setStatevalue={setCheckedFiles}
            />
            <FormPopover
              title="Visa "
              data={visa}
              statevalue={checkedFiles}
              setStatevalue={setCheckedFiles}
            />
            <Button
              size="sm "
              variant="outlined"
              className="h-[40px] p-2 ml-3 "
              onClick={() => generateBlob(checkedFiles)}
            >
              Generate
            </Button>
          </div>
        </div>

        <div className="md:w-[35%] w-full px-4 ">
          <Select label="Select" className="">
            <Input label="search" />
            <div className="flex items-center">
              <Checkbox label="Select all" />
            </div>
            <div className="flex items-center">
              <Checkbox label=" Bereavement Flight Request Letter" />
            </div>
          </Select>
        </div>
      </div>

      <div className=" rounded-lg w-full  mt-2 p-4 h-full ">
        <div className="bg-white rounded-md w-full h-full overflow-y-scroll">
          Generated Files
        </div>
      </div>
    </div>
  );
}

export default Forms;
