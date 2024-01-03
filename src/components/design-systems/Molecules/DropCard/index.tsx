import { ArrowIcon } from "../../Atoms/Icons"
import Image from "../../Atoms/Image"
import Cashier from '../../../../assets/image/Group 48098903.png'
import Typography from "../../Atoms/Typography"
import { useToggle } from "../../../../hooks/useToggle"
import { DropCardProps } from "./interface"

const DropCard: React.FC<DropCardProps> = ({ title, drop,ROUTES }) => {
    const [isOpen, , , isOpenOn, isOpenOff] = useToggle(false);
    return (
        <div className={`flex flex-col w-[248px] cursor-pointer ${isOpen && ' bg-[#356646]'}`}>
            <div className={`flex flex-row justify-between items-center p-3`} onClick={() => {
                isOpen ? isOpenOff() : isOpenOn()
            }}>
                <div className="flex flex-row gap-4">
                    <Image className="rounded-full h-[18px] w-[18px]"
                        src={Cashier} alt="" />
                    <Typography className={`font-medium text-start text-sm ${isOpen ? 'text-[#fff]' : 'text-[#356646]'}`}>{title}</Typography>
                </div>
                <ArrowIcon className={``} />
            </div>
            <div className={`flex mt-1 flex-col gap-8 justify-start ml-10 text-[#fff] ${isOpen ? 'opacity-100 h-fit' : 'h-0 opacity-0 hidden'}`}>
                <div className=" flex-col gap-2 justify-start text-[#fff] border-l flex ">

                    {
                        drop?.map(({ name, to }, i) =>
                            <Typography className="before:content-['-'] font-medium text-xs uppercase font-roboto text-white "> <a href={ROUTES[i]?.path}>{name}</a></Typography>
                        )
                    }
                </div>
                <Typography className="font-medium text-xs font-roboto text-white"> return</Typography>

            </div>

        </div>
    )
}
export default DropCard