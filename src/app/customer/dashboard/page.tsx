'use client';

import React from 'react';
import UsageHeatmapPage from './_components/usage-heatmap';
import ActiveUsageRequest from './_components/active-usage(request)';
import ActiveUsageJson from './_components/active-usage(json)';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const DashboardPage = () => {

    return (
        <div>
            <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
            
            {/* Usage Heatmap */}
            <Card>
                <CardHeader>
                    <CardTitle>API Usage Activity</CardTitle>
                    <CardDescription>The amount of your Open Finance API requested by authorized Apps (by days)</CardDescription>
                </CardHeader>
                <CardContent>
                    <UsageHeatmapPage />
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            {/* Active Usage (request per second) */}
            <Card>
                <CardHeader>
                    <CardTitle>Active Usage</CardTitle>
                    <CardDescription>Real-time API request per second</CardDescription>
                </CardHeader>
                <CardContent>
                    <ActiveUsageRequest />
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>

            {/* Active Usage (JSON Object per second) */}
            <Card>
                <CardHeader>
                    <CardTitle>Active Usage</CardTitle>
                    <CardDescription>Real-time JSON Object per second</CardDescription>
                </CardHeader>
                <CardContent>
                    <ActiveUsageJson />
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default DashboardPage;