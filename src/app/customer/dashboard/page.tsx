"use client";

import React from "react";
import UsageHeatmapPage from "./_components/usage-heatmap";
import ActiveUsageRequest from "./_components/active-usage(request)";
import ActiveUsageJson from "./_components/active-usage(json)";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <Card className="grid-cols-4 grid py-8 px-6 mb-6">
        <div className="space-y-1">
          <div className="text-zinc-500">Total Apps</div>
          <div className="font-mono text-xl">3</div>
        </div>
        <div className="space-y-1">
          <div className="text-zinc-500">Total Accounts</div>
          <div className="font-mono text-xl">4</div>
        </div>
        <div className="space-y-1">
          <div className="text-zinc-500">Authorized Data Access</div>
          <div className="font-mono text-xl">15</div>
        </div>
        <div className="space-y-1">
          <div className="text-zinc-500">Connections</div>
          <div className="font-mono text-xl">3</div>
        </div>
      </Card>
      <div className="grid grid-col-2 gap-4 pb-8">
        {/* Usage Heatmap */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>API Usage Activity</CardTitle>
            <CardDescription>
              The amount of your Open Finance API requested by authorized Apps
              (by days)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UsageHeatmapPage />
          </CardContent>
        </Card>

        {/* Active Usage (request per second) */}
        <Card>
          <CardHeader>
            <CardTitle>Active Usage</CardTitle>
            <CardDescription>Real-time API request per minute</CardDescription>
          </CardHeader>
          <CardContent>
            <ActiveUsageRequest />
          </CardContent>
        </Card>

        {/* Active Usage (JSON Object per second) */}
        <Card>
          <CardHeader>
            <CardTitle>Active Usage</CardTitle>
            <CardDescription>
              Real-time Data Point access per minute
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ActiveUsageJson />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
