import React from 'react';
import Image from '../../Atoms/Image';
import logo from "../../../../assets/image/Big-Bonus-final-Logo 1.png"
import Typography from '../../Atoms/Typography';
import { AvtarIcon, LogoutIcon } from '../../Atoms/Icons';
interface HeaderProps {
  // Add any additional props here
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-[#356646] text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt='logo' className="w-[244px]"/>
      </div>
      <div className="flex items-center flex-row gap-4">
        <div className='flex text-end flex-col'>
          <Typography variant={'h4'} className='uppercase !font-semibold'> Virender Kundu </Typography>
          <Typography className='text-[#BCBBBD] !text-xs font-medium lowercase'> virender.singh@milkanoagro.com </Typography>
          <Typography className='text-[#BCBBBD] !text-xs font-medium uppercase'> Gurgaon CC </Typography>
        </div>
        <AvtarIcon className='cursor-pointer' />
        <LogoutIcon className='cursor-pointer' />
      </div>
    </header>
  );
};

export default Header;
