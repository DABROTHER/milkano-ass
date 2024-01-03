import { useMemo, useState } from "react";
import DropCard from "../../Molecules/DropCard"
import CustomDatePicker from "../../Molecules/DatePicker"
import Header from "../../Organisms/Header"
import DropDown from "../../Molecules/DropDown";
import { ExploreBlock } from "../../Molecules/DropDown/interface";
import DebouncedInputBox from "../../Molecules/DebouncedInputBox";
import Table from "../../Molecules/Table";
import Typography from "../../Atoms/Typography";
import { EditIcon, ViewIcon } from "../../Atoms/Icons";
import { CITY, SETCOLORSTATUS, STATE, STORE, STORE_MANAGEMENT, TABLEDATA } from "./utils";

const DemandDashboard = () => {
  const [search, setSearch] = useState('')

  const handleInputChange = (value: string) => {
    setSearch(value.toLocaleLowerCase())
  };
  const headers = ['Order No.', 'Demand By', 'Mobile No', 'Demand TO', 'Item', 'Status', 'Action'];

  const data = useMemo(() => {
    return TABLEDATA?.filter((data) => data.name.toLocaleLowerCase().includes(search))?.map((data, i) => ({

      "Order No.": <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">{data.name}</Typography>,
      "Demand By": <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">{data["Demand By"]}</Typography>,
      'Mobile No': <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">{data["Mobile No"]}</Typography>,
      'Demand TO': <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">{data["Demand TO"]}</Typography>,
      'Item': <Typography className="text-neutral-950 text-base font-medium leading-[19.922px] font-roboto">{data["Item"]}</Typography>,
      'Status': <Typography className={`${data["Status"] == 'Pending' ? 'bg-[#FE8730]' : 'bg-[#73CF2B]'} items-center flex h-8 justify-center font-roboto text-sm leading-[19.922px] font-medium text-white rounded-md`}>{data["Status"]}</Typography>,
      'Action': <div className="flex gap-3 items-center">
        <Typography className="bg-[#FCC300] p-2 rounded-md text-xs font-medium text-neutral-950 font-roboto cursor-pointer flex-row"><ViewIcon className="inline-block" /> View</Typography>
        <Typography className="bg-[#356646] p-2 rounded-md text-xs font-medium text-neutral-950 font-roboto cursor-pointer flex-row"><EditIcon className="inline-block" /> Edit</Typography>
      </div>

    }))
  }, [TABLEDATA, search])

  return (
    <>
      <div className="flex bg-[#356646] h-[120px] rounded-t-[5px]">
        <div className="flex mt-8 gap-4 flex-row w-full px-5">
          <div className="flex h-12 w-[344px] rounded-[5px] ">
            <DebouncedInputBox className="flex w-full p-4 rounded-[5px]" placeholder="Search by Name or ID" onInputChange={handleInputChange} />
          </div>
          <div className="flex w-[194px] ">
            <DropDown hoverDropdown={false} className="cursor-pointer !w-full" defaultValue={{ name: "Satate", id: "" }} data={STATE} onChange={() => { }} />
          </div>
          <div className="flex w-[194px] ">
            <DropDown hoverDropdown={false} className="cursor-pointer !w-full" defaultValue={{ name: "Dist/City", id: "" }} data={CITY} onChange={() => { }} />
          </div>
          <div className="flex w-[194px] ">
            <DropDown hoverDropdown={false} className="cursor-pointer !w-full" defaultValue={{ name: "Store", id: "" }} data={STORE} onChange={() => { }} />
          </div>
        </div>
      </div>
      <div className="flex w-full mt-6">
        <Table headers={headers} data={data} />
      </div>
      <div>
        {/* sdlkskfkl */}
      </div>
    </>


  )
}
export default DemandDashboard