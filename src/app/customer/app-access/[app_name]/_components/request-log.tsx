import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { RequestLog } from "../../dummy";

const RequestLogPage = ({requestLogs}: {requestLogs: RequestLog[]}) => {

    return (
        <div>
            <h1>Request Log</h1>
            {/* @ts-expect-error: Ignoring type error for demonstration purposes */}
            <Table containerClassname='max-h-[33em] overflow-y-auto relative'>
                <TableCaption>Log of requests made by the application</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Datetime</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requestLogs.map((log, index) => (
                        <TableRow key={index}>
                            <TableCell>{log.datetime}</TableCell>
                            <TableCell>{log.action}</TableCell>
                            <TableCell>{log.endpoint}</TableCell>
                            <TableCell>{log.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default RequestLogPage;