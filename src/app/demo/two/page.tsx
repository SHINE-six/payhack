"use client";
import AndroidNotification from "@/app/demo/two/AndroidNotification";
import BankPermissions from "@/app/demo/two/BankPermissions";
import { Button } from "@/components/ui/button";
import { MessageCircleQuestionIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Integration = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const router = useRouter();
  const onLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      setShowNotif(true);
    }, 500);
  };

  return (
    <div className="">
      <div className="top-0 fixed left-0 right-0 bg-[#181818] border-b-2 border-b-gray-300 h-[56px] flex items-center px-4 z-50">
        <Image src="/logo.png" alt="Icon" width={140} height={40} />
        <div className="flex-1" />
        <div className="flex space-x-2 items-center justify-end text-white">
          <div className="text-sm flex items-center space-x-4 px-2 py-0.5 rounded-full border-zinc-200 border-[1px] border-solid">
            <Image
              className="rounded-full bg-white aspect-square object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxdrT-_iNVrFJUPuqF84KSuPcJ_EFXhX33A&s"
              alt="Avatar"
              width={24}
              height={24}
            />
            <div>Dylan Tan</div>
          </div>
        </div>
        <div className="ml-2 link text-sm">Not You?</div>
      </div>
      <div className="px-3 mt-16 text-black">
        <div className="mb-4 flex items-center text-2xl">
          <Image
            src="/thirdparty.webp"
            alt="Gero"
            className="mr-3 rounded-full"
            width="120"
            height="120"
          />
          <div className="mt-2">
            Allowing <span className="font-semibold">Budgetly</span> to access
            your financial data:
          </div>
        </div>
        {!completed ? (
          <>
            <div>
              <div className="mb-4 text-xl font-semibold">
                {"Let's connect Gero"}
              </div>
            </div>
            <div>The following permissions are required</div>
            <ul className="mt-3 pl-8">
              <li className="list-disc text-lg">
                <div className="flex space-x-2 items-center">
                  <span>Get Transactions</span>
                  <MessageCircleQuestionIcon
                    className="text-blue-400"
                    size={18}
                  />
                </div>
              </li>
              <li className="list-disc text-lg">
                <div className="flex space-x-2 items-center">
                  <span>Webhook Subscriptions</span>
                  <MessageCircleQuestionIcon
                    className="text-blue-400"
                    size={18}
                  />
                </div>
              </li>
              <li className="list-disc text-lg">
                <div className="flex space-x-2 items-center">
                  <span>Get Direct Debits</span>
                  <MessageCircleQuestionIcon
                    className="text-blue-400"
                    size={18}
                  />
                </div>
              </li>
            </ul>
            <div className="link mt-6">What is Budgetly using my data for?</div>
            <div className="mb-4 mt-12 text-sm text-slate-600">
              Select{" "}
              <span className="font-semibold text-black">your accounts</span>{" "}
              below to get started
            </div>
            <BankPermissions />
            <div className="flex justify-between space-x-4 mt-12">
              <Button className="flex-1" variant="outline">
                No, thanks
              </Button>
              <Button className="flex-1" onClick={onLoading} loading={loading}>
                Connect
              </Button>
            </div>
          </>
        ) : (
          <div>
            <div className="text-xl">Permission has been requested!</div>
            <div className="mt-3 text-slate-600">
              Please check your notification and approve the request.
            </div>
          </div>
        )}

        <div className="mt-16 text-xs text-slate-500">
          Your banks will share the information to Budgetly. Your relationship
          to Budgetly and its use of your information are subject to{" "}
          {"Budgetly's"}{" "}
          <a className="link" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="link" href="#">
            Privacy Policy
          </a>
          . To learn more about how Budgetly uses your data, see Budgetly{" "}
          <a href="#" className="link">
            Privacy Statement
          </a>
          . Disconnect Budgetly anytime from your{" "}
          <a className="link" href="#">
            My Apps
          </a>{" "}
          page.
        </div>
        <div className="mt-8 flex justify-between items-end">
          <div className="text-xs font-thin text-slate-500">
            ©2024 FinAuth. All rights reserved.
          </div>
          <Image
            src="/logo.png"
            alt="logo"
            className="mr-4"
            width={120}
            height={80}
          />
        </div>
      </div>
      <AndroidNotification
        showNotif={showNotif}
        onClick={() => {
          setShowNotif(false);
          router.push("/demo/three");
        }}
      />
    </div>
  );
};

export default Integration;
