"use client";
import React, { useState } from "react";
import {
  Wallet,
  CreditCard,
  Bell,
  Receipt,
  CheckCircle2,
  X,
} from "lucide-react";
import Image from "next/image";

const FinancialAccessFlow = ({ appName = "Budgetly" }) => {
  const [currentStep, setCurrentStep] = useState("request");

  const permissions = [
    {
      icon: <Receipt className="h-5 w-5" />,
      title: "Get Transactions",
      description: "Access to view your transaction history",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Webhook Subscriptions",
      description: "Receive real-time updates about your account",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      title: "Get Direct Debits",
      description: "View your recurring payments",
    },
  ];

  const handleApprove = () => {
    setCurrentStep("success");
  };

  const RequestScreen = () => (
    <div className="mx-auto max-w-sm rounded-3xl bg-neutral-900 p-6 text-white">
      {/* App Logo & Name */}
      <div className="mb-8 flex flex-col items-center space-y-3">
        <div className="rounded-full bg-yellow-500 p-4">
          <Wallet className="h-8 w-8 text-black" />
        </div>
        <div className="flex space-x-3 items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
            <Image
              className="w-12 h-12 object-contain"
              src="/thirdparty.webp"
              alt="logo"
              width={48}
              height={48}
            />
          </div>
          <div className="">
            <h2 className="text-xl font-bold">{appName}</h2>
            <p className="text-sm text-neutral-400">
              Financial Data Access Request
            </p>
          </div>
        </div>
      </div>

      {/* Permissions List */}
      <div className="space-y-4">
        {permissions.map((permission, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 rounded-lg bg-neutral-800 p-4"
          >
            <div className="mt-1">{permission.icon}</div>
            <div>
              <p className="font-medium">{permission.title}</p>
              <p className="text-sm text-neutral-400">
                {permission.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="flex-1 rounded-full bg-neutral-800 py-3 text-sm font-medium text-white hover:bg-neutral-700">
          Reject
        </button>
        <button
          onClick={handleApprove}
          className="flex-1 rounded-full bg-yellow-500 py-3 text-sm font-medium text-black hover:bg-yellow-400"
        >
          Approve
        </button>
      </div>
    </div>
  );

  const SuccessScreen = () => (
    <div className="mx-auto max-w-sm rounded-3xl bg-neutral-900 p-6 text-white">
      <button className="ml-auto block text-neutral-400 hover:text-white">
        <X className="h-6 w-6" />
      </button>

      <div className="flex flex-col items-center space-y-6 py-8">
        <div className="animate-bounce rounded-full bg-green-500/10 p-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>

        <div className="text-center">
          <h2 className="mb-2 text-xl font-bold">Access Granted</h2>
          <p className="text-neutral-400">
            {appName} can now access your financial data
          </p>
        </div>

        <div className="w-full rounded-lg bg-neutral-800 p-4 text-center">
          <p className="text-sm text-neutral-400">You may close this app</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black p-6">
      {currentStep === "request" ? <RequestScreen /> : <SuccessScreen />}
    </div>
  );
};

export default FinancialAccessFlow;
