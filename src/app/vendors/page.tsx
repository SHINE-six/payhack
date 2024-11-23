"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AlertCircle } from "lucide-react";
import { LineChart, ResponsiveContainer, XAxis, YAxis, Line } from "recharts";

const historicalData = [
  { month: "Jul", score: 75 },
  { month: "Aug", score: 82 },
  { month: "Sept", score: 78 },
  { month: "Oct", score: 85 },
  { month: "Nov", score: 82 },
];

export default function APIComplianceReport() {
  return (
    <div className="pb-12">
      <Card className="grid-cols-4 grid py-8 px-6 mb-6">
        <div className="space-y-1">
          <div className="text-zinc-500">Total Users</div>
          <div className="font-mono text-xl">2240</div>
        </div>
        <div className="space-y-1">
          <div className="text-zinc-500">Applications</div>
          <div className="font-mono text-xl">1</div>
        </div>
        <div className="space-y-1">
          <div className="text-zinc-500">APIs</div>
          <div className="font-mono text-xl">12</div>
        </div>
        <div className="space-y-1">
          <div className="text-zinc-500">Connections</div>
          <div className="font-mono text-xl">3</div>
        </div>
      </Card>
      <div className="">
        <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Usage Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>API Endpoint</TableHead>
                      <TableHead>Compliance Score</TableHead>
                      <TableHead>Threshold</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Webhook Subscriptions</TableCell>
                      <TableCell>85%</TableCell>
                      <TableCell>80%</TableCell>
                      <TableCell className="text-green-600">
                        Compliant
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Get Transactions</TableCell>
                      <TableCell>78%</TableCell>
                      <TableCell>80%</TableCell>
                      <TableCell className="text-amber-600">At Risk</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Get Balances</TableCell>
                      <TableCell>92%</TableCell>
                      <TableCell>80%</TableCell>
                      <TableCell className="text-green-600">
                        Compliant
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Historical Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={historicalData}>
                    <XAxis dataKey="month" stroke="#888888" />
                    <YAxis stroke="#888888" />
                    <Line
                      type="monotone"
                      dataKey="score"
                      stroke="#6C5DD3"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="relative">
              <CardHeader className="text-center">
                <div className="absolute h-24 w-24 rounded-full border-4 border-purple-400 left-[50%] translate-x-[-50%] top-8"></div>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-purple-100">
                  <span className="text-2xl font-bold">82%</span>
                </div>
                <CardTitle className="mt-4 text-2xl">B</CardTitle>
                <p className="text-xs text-zinc-500">
                  Overall API Compliance Grade
                </p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <AlertCircle size={36} className="text-red-500" />
                  <div>
                    <h3 className="font-semibold">
                      Irregular access locations
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Non-whitelisted IP addresses are accessing the APIs
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle size={36} className="text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Unauthorized access</h3>
                    <p className="text-sm text-zinc-500">
                      Your application is trying to access unauthorized API
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertCircle size={36} className="text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">
                      Frequent access to Sensitive data
                    </h3>
                    <p className="text-sm text-zinc-500">
                      Your application is frequently accessing sensitive data
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
