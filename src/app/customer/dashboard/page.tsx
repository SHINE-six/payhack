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
            
            <div className='grid grid-col-2 gap-4'>
                {/* */}
                <Card className='col-span-2'>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
    
                {/* Usage Heatmap */}
                <Card className='col-span-2'>
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
                        <CardDescription>Real-time API request per minute</CardDescription>
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
                        <CardDescription>Real-time JSON Object per minute</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ActiveUsageJson />
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default DashboardPage;