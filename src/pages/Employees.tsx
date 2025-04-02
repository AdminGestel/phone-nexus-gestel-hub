
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Plus, Search, Phone, User, Edit, Trash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Mock employee data
const mockEmployees = [
  {
    id: '1',
    firstName: 'Jean',
    lastName: 'Dupont',
    company: 'Siège Social',
    phone: '+33 6 12 34 56 78',
    imei: '123456789012345',
    pukCode: '12345678',
    carrier: 'Orange',
    status: 'active',
  },
  {
    id: '2',
    firstName: 'Marie',
    lastName: 'Martin',
    company: 'Bureau Paris',
    phone: '+33 6 23 45 67 89',
    imei: '234567890123456',
    pukCode: '23456789',
    carrier: 'SFR',
    status: 'active',
  },
  {
    id: '3',
    firstName: 'Paul',
    lastName: 'Bernard',
    company: 'Bureau Lyon',
    phone: '+33 6 34 56 78 90',
    imei: '345678901234567',
    pukCode: '34567890',
    carrier: 'Bouygues',
    status: 'inactive',
  },
  {
    id: '4',
    firstName: 'Sophie',
    lastName: 'Petit',
    company: 'Bureau Marseille',
    phone: '+33 6 45 67 89 01',
    imei: '456789012345678',
    pukCode: '45678901',
    carrier: 'Orange',
    status: 'active',
  },
  {
    id: '5',
    firstName: 'Thomas',
    lastName: 'Dubois',
    company: 'Siège Social',
    phone: '+33 6 56 78 90 12',
    imei: '567890123456789',
    pukCode: '56789012',
    carrier: 'SFR',
    status: 'active',
  },
];

const Employees = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [employees] = useState(mockEmployees);
  
  const filteredEmployees = employees.filter(employee => 
    employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.phone.includes(searchQuery)
  );
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Actif</Badge>;
      case 'inactive':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Inactif</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{status}</Badge>;
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Salariés</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nouveau salarié
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Ajouter un salarié</DialogTitle>
              <DialogDescription>
                Créez une nouvelle fiche salarié avec les informations personnelles et de téléphonie.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">Prénom</label>
                  <Input id="firstName" placeholder="Prénom" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Nom</label>
                  <Input id="lastName" placeholder="Nom" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Société / Site</label>
                <Input id="company" placeholder="Société ou site" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                <Input id="phone" placeholder="+33 6 xx xx xx xx" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="imei" className="text-sm font-medium">IMEI</label>
                  <Input id="imei" placeholder="IMEI" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pukCode" className="text-sm font-medium">Code PUK</label>
                  <Input id="pukCode" placeholder="Code PUK" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="carrier" className="text-sm font-medium">Opérateur</label>
                <Input id="carrier" placeholder="Opérateur téléphonique" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Liste des salariés</CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un salarié..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Société</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead>Opérateur</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-muted-foreground mr-2" />
                      <div>
                        <p className="font-medium">{employee.lastName} {employee.firstName}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{employee.company}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                      {employee.phone}
                    </div>
                  </TableCell>
                  <TableCell>{employee.carrier}</TableCell>
                  <TableCell>{getStatusBadge(employee.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Employees;
