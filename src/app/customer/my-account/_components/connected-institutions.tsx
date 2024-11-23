'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import Link from 'next/link'

type Institution = {
  id: string
  name: string
  lastSync: string
}

export function ConnectedInstitutions() {
  const [institutions, setInstitutions] = useState<Institution[]>([
    { id: '1', name: 'Bank of America', lastSync: '2023-05-14 09:00 AM' },
    { id: '2', name: 'Fidelity Investments', lastSync: '2023-05-13 11:30 AM' },
    { id: '3', name: 'Allianz Insurance', lastSync: '2023-05-12 03:45 PM' },
  ])

  const handleDisconnect = (id: string) => {
    setInstitutions(institutions.filter(inst => inst.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Institutions</CardTitle>
        <CardDescription>Manage your connected financial accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {institutions.map((institution) => (
            <div key={institution.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">{institution.name}</h3>
                <p className="text-sm text-muted-foreground">Last synced: {institution.lastSync}</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Disconnect</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will disconnect your account from {institution.name}. You can always reconnect later.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDisconnect(institution.id)}>Disconnect</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
          {institutions.length === 0 && (
            <p>No institutions connected. Connect your first institution from the home page.</p>
          )}
          <div className='flex justify-center'>
              <Button variant="default">
                <Link href="/customer/my-account/connect">Connect New Institution</Link>
                </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

