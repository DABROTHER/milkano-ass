import { ArrowIcon } from "../../Atoms/Icons"
import Image from "../../Atoms/Image"
import Cashier from '../../../../assets/image/Group 48098903.png'
import Typography from "../../Atoms/Typography"
import { useToggle } from "../../../../hooks/useToggle"

const DropCard: React.FC = () => {
    const [isOpen, , , isOpenOn, isOpenOff] = useToggle(false);
    return (
        <div className={`flex flex-col w-[248px] cursor-pointer ${isOpen && ' bg-[#356646]'}`}>
            <div className={`flex flex-row justify-between items-center p-3`} onClick={() => {
                isOpen ? isOpenOff() : isOpenOn()
            }}>
                <div className="flex flex-row gap-4">
                    <Image className="rounded-full h-[18px] w-[18px]"
                        src={Cashier} alt="" />
                    <Typography className={`font-medium text-start text-sm ${isOpen ? 'text-[#fff]' : 'text-[#356646]'}`}>Store Management</Typography>
                </div>
                <ArrowIcon className={``}  />
            </div>
            <div className={`flex mt-5 flex-col gap-8 justify-start pl-10 text-[#fff] ${isOpen ?'opacity-100 h-fit':'h-0 opacity-0 hidden'}`}>
                <Typography> Demand Create</Typography>
                <Typography> Demand Create</Typography>
                <Typography> Demand Create</Typography>
                <Typography> Demand Create</Typography>
                <Typography> Demand Create</Typography>
            </div>

        </div>
    )
}
export default DropCard