
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
import { Plus, Search, Globe, MapPin, Edit, Trash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock internet lines data
const mockInternetLines = [
  {
    id: '1',
    location: 'Siège Social Paris',
    address: '25 Rue du Commerce, 75015 Paris',
    lineType: 'Fibre',
    carrier: 'Orange',
    speed: '1 Gbps',
    contractRef: 'FBR-123456',
    status: 'active',
  },
  {
    id: '2',
    location: 'Bureau Lyon',
    address: '15 Rue de la République, 69002 Lyon',
    lineType: 'Fibre',
    carrier: 'SFR',
    speed: '500 Mbps',
    contractRef: 'SFR-789012',
    status: 'active',
  },
  {
    id: '3',
    location: 'Bureau Marseille',
    address: '45 Boulevard Michelet, 13008 Marseille',
    lineType: 'ADSL',
    carrier: 'Bouygues',
    speed: '30 Mbps',
    contractRef: 'BYG-345678',
    status: 'inactive',
  },
  {
    id: '4',
    location: 'Entrepôt Bordeaux',
    address: '78 Quai des Chartrons, 33000 Bordeaux',
    lineType: 'Fibre',
    carrier: 'Free',
    speed: '800 Mbps',
    contractRef: 'FREE-901234',
    status: 'active',
  },
  {
    id: '5',
    location: 'Bureau Lille',
    address: '120 Boulevard de la Liberté, 59000 Lille',
    lineType: 'ADSL',
    carrier: 'Orange',
    speed: '25 Mbps',
    contractRef: 'OR-567890',
    status: 'active',
  },
];

const InternetLines = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [internetLines] = useState(mockInternetLines);
  
  const filteredLines = internetLines.filter(line => 
    line.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    line.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    line.carrier.toLowerCase().includes(searchQuery.toLowerCase()) ||
    line.lineType.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-3xl font-bold">Lignes Internet</h1>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle ligne
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Liste des lignes Internet</CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher une ligne..."
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
                <TableHead>Localisation</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Opérateur</TableHead>
                <TableHead>Débit</TableHead>
                <TableHead>Référence</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLines.map((line) => (
                <TableRow key={line.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                      <div>
                        <p className="font-medium">{line.location}</p>
                        <p className="text-xs text-muted-foreground">{line.address}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      {line.lineType}
                    </div>
                  </TableCell>
                  <TableCell>{line.carrier}</TableCell>
                  <TableCell>{line.speed}</TableCell>
                  <TableCell>{line.contractRef}</TableCell>
                  <TableCell>{getStatusBadge(line.status)}</TableCell>
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

export default InternetLines;
