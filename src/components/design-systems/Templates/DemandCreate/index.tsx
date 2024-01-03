import { useState } from "react"
import Typography from "../../Atoms/Typography"
import DropDown from "../../Molecules/DropDown"
import { STATE } from "../DemandDashboard/utils"
import { BRAND_NAME, DEMAND_GENERATED_FOR, DEMAND_GENERATED_TO, PACK_QTY, PRODUCT_CATEGORY, SELECT_PRODUCT } from "./utils"
import Button from "../../Atoms/Button"
import { DeleteIcon, PlusIcon } from "../../Atoms/Icons"
interface AddProduct {
    id: number;
}
const DemandCreate = () => {
    const [add, setAdd] = useState<AddProduct[]>([{ id: 0 }])
    const addProductHandler = () => {
        setAdd([...add, { id: add.length }]);
    };

    const removeProductHandler = (id: number) => {
        const updatedDivs = add.filter((div) => div.id !== id);
        setAdd(updatedDivs);
    };
    return (
        <>
            <div className="flex flex-row gap-8 mx-3 h-full -mt-[25px]">
                <div className="flex w-full flex-col">
                    <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Demand Generated By</Typography>
                    <input value={'MIlkano101'} className="border border-[#6E6E6E] bg-[#E1E1E1] !w-full !rounded-md h-12 px-3" disabled />
                </div>
                <div className="flex w-full flex-col">
                    <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Demand Generated For</Typography>
                    <DropDown hoverDropdown={false} className="cursor-pointer !w-full !rounded-md z-[99]" defaultValue={DEMAND_GENERATED_FOR[0]} data={DEMAND_GENERATED_FOR} onChange={() => { }} />
                </div>
                <div className="flex w-full flex-col">
                    <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Demand Generated TO</Typography>
                    <DropDown hoverDropdown={false} className="cursor-pointer !w-full !rounded-md z-[99]" defaultValue={DEMAND_GENERATED_TO[0]} data={DEMAND_GENERATED_TO} onChange={() => { }} />
                </div>

            </div>
            <div className="flex w-full border-b border-neutral-950 h-[40px]">
            </div>
            {add?.map(({ id }, i) =>
                <div key={id} className="flex flex-col w-full h-full border-b pb-3">
                    <div className="flex flex-row gap-8 mx-3 h-full mt-10">
                        <div className="flex w-full flex-col">
                            <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Product Category</Typography>
                            <DropDown hoverDropdown={false} className="cursor-pointer !w-full !rounded-md z-[98]" defaultValue={PRODUCT_CATEGORY[0]} data={PRODUCT_CATEGORY} onChange={() => { }} />
                        </div>
                        <div className="flex w-full flex-col">
                            <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Brand Name</Typography>
                            <DropDown hoverDropdown={false} className="cursor-pointer !w-full !rounded-md z-[98]" defaultValue={BRAND_NAME[0]} data={BRAND_NAME} onChange={() => { }} />
                        </div>
                        <div className="flex w-full flex-col">
                            <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Demand Generated By</Typography>
                            <DropDown hoverDropdown={false} className="cursor-pointer !w-full !rounded-md z-[98]" defaultValue={SELECT_PRODUCT[0]} data={SELECT_PRODUCT} onChange={() => { }} />
                        </div>

                    </div>
                    <div className="flex flex-row mt-[60px] h-full mx-3 gap-10">
                        <div className="flex !w-[166px] flex-col h-full">
                            <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Pack QTY</Typography>
                            <DropDown children={<div className="flex absolute border-l h-12 justify-center items-center left-[85%]">
                                <Typography className="flex mr-2 w-full justify-center text-base font-semibold">4</Typography>
                            </div>} hoverDropdown={false} className="cursor-pointer relative w-full !rounded-md" defaultValue={PACK_QTY[0]} data={PACK_QTY} onChange={() => { }} />
                        </div>
                        <div className="flex flex-col !w-[166px]">
                            <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Demand Generated By</Typography>
                            <input value={'70 litre'} className="border border-[#6E6E6E] bg-[#E1E1E1] !w-full !rounded-md h-12 px-3" disabled />
                        </div>
                    </div>
                    {
                        (add?.length > 1) &&
                        <div className=" flex w-12 h-12 mt-3 mx-3 cursor-pointer" onClick={(() => removeProductHandler(id))}>
                            <DeleteIcon className="h-full w-full flex" />
                        </div>
                    }
                </div>
            )}
            <div className="flex flex-col mt-5">
                <Typography className="font-roboto text-sm text-[#6E6E6E] font-normal">Add Product</Typography>
                <Button className="flex w-[167px] h-[58px] justify-center items-center rounded-md" onClick={() => addProductHandler()}>Add <PlusIcon className=" inline-block ml-11" /></Button>
            </div>
            <div className="flex justify-end">
            <Button className="flex w-[167px] h-[58px] justify-center items-center rounded-md" onClick={() => ()=>{}}>Create Demand</Button>

            </div>
        </>
    )
}
export default DemandCreate