'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AuthorizationSection } from './authorization-section'

const popularInstitutions = [
  { id: 'bofa', name: 'Bank of America', category: 'Banks' },
  { id: 'allianz', name: 'Allianz Insurance', category: 'Insurance Providers' },
  { id: 'fidelity', name: 'Fidelity Investments', category: 'Investment Firms' },
]

const allInstitutions = [
  ...popularInstitutions,
  { id: 'chase', name: 'Chase Bank', category: 'Banks' },
  { id: 'wellsfargo', name: 'Wells Fargo', category: 'Banks' },
  { id: 'statefarm', name: 'State Farm Insurance', category: 'Insurance Providers' },
  { id: 'vanguard', name: 'Vanguard', category: 'Investment Firms' },
]

export function InstitutionSelector() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedInstitution, setSelectedInstitution] = useState<string | null>(null)

  const filteredInstitutions = allInstitutions.filter(inst =>
    inst.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="max-w-1/3 mx-auto">
      <CardHeader>
        <CardTitle>Select Your Institution</CardTitle>
        <CardDescription>Choose from popular options or search for your institution</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="popular">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="all">All Institutions</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {popularInstitutions.map((inst) => (
                <Button
                  key={inst.id}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center"
                  onClick={() => setSelectedInstitution(inst.id)}
                >
                  <span className="font-semibold">{inst.name}</span>
                  <span className="text-sm text-muted-foreground">{inst.category}</span>
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="all">
            <div className="space-y-4 mt-4">
              <Input
                type="search"
                placeholder="Search for your institution (e.g., ABC Bank, XYZ Insurance)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredInstitutions.map((inst) => (
                  <Button
                    key={inst.id}
                    variant="outline"
                    className="h-16 flex flex-col items-start justify-center"
                    onClick={() => setSelectedInstitution(inst.id)}
                  >
                    <span className="font-semibold">{inst.name}</span>
                    <span className="text-sm text-muted-foreground">{inst.category}</span>
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        {selectedInstitution && (
          <AuthorizationSection
            institution={allInstitutions.find(inst => inst.id === selectedInstitution)!}
          />
        )}
      </CardFooter>
    </Card>
  )
}

