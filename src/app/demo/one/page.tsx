"use client";

import React, { FormEventHandler, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LoginForm = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    setShowDialog(true);
    e.preventDefault();
  };
  const [creating, setCreating] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#ff4d00]">budgetly</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-12"
                required
                defaultValue="dylantan@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="h-12"
                required
                defaultValue="asdfasdf"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#ff4d00] hover:bg-[#e64500] active:bg-[#d53f00]"
            >
              Login
            </Button>

            <div className="text-center">
              <button
                type="button"
                className="text-[#ff4d00] hover:underline text-sm"
                onClick={() => {
                  /* Add reset password logic */
                }}
              >
                Reset Password
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={showDialog}
        onOpenChange={() => {
          setShowDialog(false);
        }}
      >
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Permission Request</DialogTitle>
            <DialogDescription>
              <div className="mt-8 text-left">
                We need your permission to access your financial data.
              </div>
              <div className="flex justify-end mt-5 space-x-3">
                <Button loading={creating} variant="outline">
                  Cancel
                </Button>
                <Button
                  loading={creating}
                  className="bg-[#ff4d00] hover:bg-[#e64500] active:bg-[#d53f00]"
                  onClick={() => {
                    setCreating(true);
                    setTimeout(() => {
                      setCreating(false);
                      setShowDialog(false);
                      router.push("/demo/two");
                    }, 2000);
                  }}
                >
                  Connect
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
