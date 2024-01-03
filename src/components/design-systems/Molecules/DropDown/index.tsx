import { useCallback, useMemo, useState } from 'react'
import Typography from '../../Atoms/Typography'
import { DropDownProps, ExploreBlock } from './interface'
import { ArrowDownIcon } from '../../Atoms/Icons'


const DropDown: React.FC<DropDownProps> = ({
    children,
    className,
    data = [],
    defaultValue,
    onChange,
    hoverDropdown = true,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [value, setValue] = useState<ExploreBlock>(defaultValue)

    const handleToggle = () => {
        if (!hoverDropdown) {
            setIsOpen(!isOpen)
        }
    }
    useMemo(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const handleChange = (selectedValue: ExploreBlock) => {
        setValue(selectedValue)
        onChange?.(selectedValue)
        setIsOpen(false)
    }
    return (
        <div className="relative w-full">
            <div
                className={`trending-dropdown group absolute z-10 block h-fit w-auto items-start rounded-sm border-[0.5px] border-lightGray bg-white px-4 py-[11px] ${className}`}
                onClick={handleToggle}
                
            >

                <div className="flex items-center justify-between">
                    <Typography className="text-base font-semibold text-gray">{value?.name}</Typography>
                    <div className=' bg-[#356646] mr-4 w-6 h-6 flex flex-row rounded-full items-center justify-center'>
                        <ArrowDownIcon
                            className={`items-center transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
                            height={8}
                            width={16}
                        // stroke='#356646'
                        />

                    </div>
                    {children}
                </div>
                <div
                    className={`h-0 w-full opacity-0 ${hoverDropdown ? 'group-hover:h-fit group-hover:opacity-100' : isOpen ? 'h-fit opacity-100' : 'h-0 opacity-0'
                        }`}
                >
                    <div className="h-full w-full overflow-hidden rounded-sm">
                        <ul className="m-0 h-full w-full list-none p-0 ">
                            {data.map((drop, i) => (
                                <li
                                    className={`flex w-full cursor-pointer flex-row justify-between px-0 pt-0 text-start transition-all duration-200 ease-in ${hoverDropdown ? 'group-hover:pt-3 group-hover:ease-out' : 'pt-3'
                                        }`}
                                    key={i}
                                    onClick={() => handleChange(drop)}
                                >
                                    <a
                                        className={`text-start text-base font-normal hover:font-bold ${drop.name == value.name && 'font-bold'
                                            }`}
                                    >
                                        {drop.name}
                                    </a>

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown
