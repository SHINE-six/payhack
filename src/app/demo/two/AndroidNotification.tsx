import React from "react";
import Image from "next/image";

type AndroidNotificationProps = {
  showNotif?: boolean;
  onClick?: () => void;
};

const AndroidNotification = ({
  showNotif = false,
  onClick,
}: AndroidNotificationProps) => {
  return (
    <div
      className={`fixed top-0 z-50 left-0 right-0 flex justify-center transition-transform duration-300 ease-out ${
        showNotif ? "translate-y-0" : "-translate-y-full"
      }`}
      onClick={onClick}
    >
      <div className="mx-4 mt-2 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex items-center gap-3 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Image
              src="https://play-lh.googleusercontent.com/tKvJp1TadWbY9YjwbkUC-h97-sBjn0BEb1ztaGdonVZvqqzenMy_PGyc_qGsKIxCiZk"
              alt="Icon"
              width={48}
              height={48}
            />
          </div>

          <div className="flex-1">
            <h3 className="font-medium text-gray-900">Maybank</h3>
            <p className="text-sm text-gray-600">
              You have a transaction to be approved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidNotification;
