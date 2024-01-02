import { useMemo, useState } from "react";
import DropCard from "../../Molecules/DropCard"
import CustomDatePicker from "../../Molecules/DropCard/DatePicker"
import Header from "../../Organisms/Header"
import DropDown from "../../Molecules/DropDown";
import { ExploreBlock } from "../../Molecules/DropDown/interface";
import DebouncedInputBox from "../../Molecules/DebouncedInputBox";
import Table from "../../Molecules/Table";
import Typography from "../../Atoms/Typography";
import { EditIcon, ViewIcon } from "../../Atoms/Icons";
import { TABLEDATA } from "./utils";

const DemandDashboard = () => {
  const handleInputChange = (value: string) => {
    console.log('Debounced Input:', value);

  };
  const headers = ['Order No.', 'Demand By', 'Mobile No', 'Demand TO', 'Item', 'Status', 'Action'];

  const data = useMemo(() => {
    return TABLEDATA?.map((data, i) => ({

      "Order No.": <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">MLK- STR-001</Typography>,
      "Demand By": <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">PK Road Store</Typography>,
      'Mobile No': <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">9810198101</Typography>,
      'Demand TO': <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">WHS- Gurgaon</Typography>,
      'Item': <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">2</Typography>,
      'Status': <Typography className={`bg-[#FE8730] items-center flex h-8 justify-center font-roboto text-sm leading-[19.922px] font-medium text-white rounded-md`}>Pending</Typography>,
      'Action': <div className="flex gap-3 items-center">
        <Typography className="bg-[#FCC300] p-2 rounded-md text-xs font-medium text-neutral-950 font-roboto cursor-pointer flex-row"><ViewIcon className="inline-block" /> View</Typography>
        <Typography className="bg-[#356646] p-2 rounded-md text-xs font-medium text-neutral-950 font-roboto cursor-pointer flex-row"><EditIcon className="inline-block" /> Edit</Typography>
      </div>

    }))
  }, [TABLEDATA])

  return (<div className="bg-[#F5F6FA]">
    <Header />
    <div className="flex flex-row">
      <div className="bg-[#fff] pb-8">

        <DropCard />
        <DropCard />
      </div>
      <div className="bg-[#fff] w-full flex flex-col py-4 m-4 rounded-t-[5px]">

        <div>
      <CustomDatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
      </div>
        <div className="flex bg-[#356646] h-[120px] rounded-t-[5px]">
          <div className="flex mt-8 gap-4 flex-row w-full px-5">
            <div className="flex h-12 w-[344px] rounded-[5px] ">
              <DebouncedInputBox className="flex w-full p-4 rounded-[5px]" placeholder="Search by Name or ID" onInputChange={handleInputChange} />
            </div>
            <div className="flex w-[194px] ">
              <DropDown hoverDropdown={false} className="cursor-pointer !w-full" defaultValue={{ name: "nkjjkkkj", id: "iooi" }} data={[{ name: "ok", id: "iooi" }, { name: "mo", id: "iooi" }]} onChange={() => { }} />
            </div>
            <div className="flex w-[194px] ">
              <DropDown hoverDropdown={false} className="cursor-pointer !w-full" defaultValue={{ name: "nkjjkkkj", id: "iooi" }} data={[{ name: "ok", id: "iooi" }, { name: "mo", id: "iooi" }]} onChange={() => { }} />
            </div>
            <div className="flex w-[194px] ">
              <DropDown hoverDropdown={false} className="cursor-pointer !w-full" defaultValue={{ name: "nkjjkkkj", id: "iooi" }} data={[{ name: "ok", id: "iooi" }, { name: "mo", id: "iooi" }]} onChange={() => { }} />
            </div>
          </div>
        </div>
        <div className="flex w-full mt-6">
          <Table headers={headers} data={data} />
        </div>
      </div>
    </div>

  </div>)
}
export default DemandDashboard