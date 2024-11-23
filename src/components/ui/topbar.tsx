import { Search, Sparkle } from "lucide-react";
import Image from "next/image";

type TopBarProps = {
  isCustomer?: boolean;
};

const TopBar = ({ isCustomer = false }: TopBarProps) => {
  return (
    <div className="top-0 fixed left-0 right-0 bg-[#181818] border-b-2 border-b-gray-300 h-[56px] flex items-center px-4 z-50">
      <Image src="/logo.png" alt="Icon" width={140} height={40} />
      <div className="flex-1" />
      <div className="flex space-x-8 items-center">
        <div className="flex space-x-4 text-white items-center text-md">
          <Search className="text-white" size={18} />
          <div>Search</div>
        </div>
        {!isCustomer ? (
          <>
            <div className="text-white text-md">Discuss your needs</div>
            <div className="text-white text-md">Documentation</div>
          </>
        ) : null}
        <div
          className="text-md flex space-x-3 text-white items-center rounded-sm px-2 py-1"
          style={{
            background:
              "linear-gradient(255deg, rgba(242, 172, 132, 0.8) -12.7%, rgba(117, 73, 243, 0.8) 40.05%, rgba(64, 90, 228, 0.8) 56.57%, rgba(77, 183, 163, 0.8) 108.69%)",
          }}
        >
          <Sparkle className="text-white" size={18} />
          <span>Ask Guide</span>
        </div>
        <div className="border-r-2 border-r-zinc-300 border-solid h-8" />
        {isCustomer ? (
          <div className="text-white text-md flex items-center space-x-4">
            <Image
              className="rounded-full bg-white aspect-square object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxdrT-_iNVrFJUPuqF84KSuPcJ_EFXhX33A&s"
              alt="Avatar"
              width={32}
              height={32}
            />
            <div className="text-lg">Dylan Tan</div>
          </div>
        ) : (
          <div className="text-white text-md flex items-center space-x-4">
            <Image
              className="rounded-full bg-white aspect-square object-contain"
              src="/thirdparty.webp"
              alt="Avatar"
              width={32}
              height={32}
            />
            <div className="text-lg">Budgetly</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
