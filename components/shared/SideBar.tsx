'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { channels, sidebarLinks, yoursetting } from '@/constants/index';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className=" fixed overflow-clip overflow-auto overflow-y-scroll  left-0 top-0 flex h-screen w-fit flex-col  justify-between border border-white/10 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-1 border-b border-white/10">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg hover:bg-white/10 justify-start ',
                {
                  'bg-white/5': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className=' border-t border-white/10'>
        <h1 className='font-bold py-1'>Your {'>'} </h1>
        {yoursetting.map((your) =>{
          const isActive = pathname === your.route || pathname.startsWith(`${your.route}/`);
        return (
          <Link
          href={your.route}
          key={your.label}
          className={cn(
            'flex gap-4 items-center p-4 rounded-lg hover:bg-white/10 justify-start ',
            {
              // 'bg-white/10': isActive,
            }
          )}
        >
          <Image
            src={your.imgURL}
            alt={your.label}
            width={24}
            height={24}
          />
          <p className="text-lg font-semibold max-lg:hidden">
            {your.label}
          </p>
        </Link> 
        )
        })}
        </div>
        <div className=' border-t border-white/10'>
        <h1 className='font-bold py-1'>Chanels {} </h1>
        {channels.map((your) =>{
          const isActive = pathname === your.route || pathname.startsWith(`${your.route}/`);
        return (
          <Link
          href={your.route}
          key={your.label}
          className={cn(
            'flex gap-4 items-center p-4 rounded-lg hover:bg-white/10 justify-start ',
            {
              // 'bg-white/10': isActive,
            }
          )}
        >
          <Image
            src={your.imgURL}
            alt={your.label}
            width={24}
            height={24}
            className='rounded-full'
          />
          <p className="text-lg font-semibold max-lg:hidden">
            {your.label}
          </p>
        </Link> 
        )
        })}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;