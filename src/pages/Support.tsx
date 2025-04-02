
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, User, Building } from 'lucide-react';

interface ContactCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  department: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, role, phone, email, department }) => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-gestel-blue h-2"></div>
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <User className="h-5 w-5 mr-2 text-gestel-blue" />
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{department}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{email}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Support = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Support Technique</h1>
      
      <Tabs defaultValue="orange">
        <TabsList className="mb-6">
          <TabsTrigger value="orange">Orange</TabsTrigger>
          <TabsTrigger value="sfr">SFR</TabsTrigger>
          <TabsTrigger value="bouygues">Bouygues</TabsTrigger>
          <TabsTrigger value="free">Free</TabsTrigger>
        </TabsList>
        
        <TabsContent value="orange">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Numéros d'urgence - Orange</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-md border">
                  <table className="w-full text-sm">
                    <thead className="bg-gestel-blue text-white">
                      <tr>
                        <th className="p-3 text-left font-medium">Service</th>
                        <th className="p-3 text-left font-medium">Numéro</th>
                        <th className="p-3 text-left font-medium">Horaires</th>
                        <th className="p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Support Technique Pro</td>
                        <td className="p-3">0 800 012 345</td>
                        <td className="p-3">7j/7 - 24h/24</td>
                        <td className="p-3">Assistance technique pour les clients professionnels</td>
                      </tr>
                      <tr className="border-t bg-gestel-gray">
                        <td className="p-3 font-medium">Service Client Pro</td>
                        <td className="p-3">0 801 234 567</td>
                        <td className="p-3">Lun-Ven 8h-20h</td>
                        <td className="p-3">Gestion de la relation client et facturation</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Support Ligne Fixe Pro</td>
                        <td className="p-3">0 802 345 678</td>
                        <td className="p-3">Lun-Sam 8h-22h</td>
                        <td className="p-3">Support pour les lignes fixes, ADSL et Fibre</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-xl font-semibold mb-4">Contacts dédiés</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ContactCard 
                name="Thomas Martin" 
                role="Ingénieur Support" 
                phone="06 12 34 56 78" 
                email="t.martin@orange.com" 
                department="Support Technique Pro"
              />
              <ContactCard 
                name="Julie Dupont" 
                role="Chargée de Clientèle" 
                phone="06 23 45 67 89" 
                email="j.dupont@orange.com" 
                department="Service Client"
              />
              <ContactCard 
                name="François Leroy" 
                role="Responsable Grands Comptes" 
                phone="06 34 56 78 90" 
                email="f.leroy@orange.com" 
                department="Commercial Pro"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sfr">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Numéros d'urgence - SFR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-md border">
                  <table className="w-full text-sm">
                    <thead className="bg-gestel-blue text-white">
                      <tr>
                        <th className="p-3 text-left font-medium">Service</th>
                        <th className="p-3 text-left font-medium">Numéro</th>
                        <th className="p-3 text-left font-medium">Horaires</th>
                        <th className="p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Support Technique Pro</td>
                        <td className="p-3">0 805 123 456</td>
                        <td className="p-3">7j/7 - 24h/24</td>
                        <td className="p-3">Assistance technique pour les clients professionnels</td>
                      </tr>
                      <tr className="border-t bg-gestel-gray">
                        <td className="p-3 font-medium">Service Client Pro</td>
                        <td className="p-3">0 806 234 567</td>
                        <td className="p-3">Lun-Ven 8h-20h</td>
                        <td className="p-3">Gestion de la relation client et facturation</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Support Ligne Mobile</td>
                        <td className="p-3">0 807 345 678</td>
                        <td className="p-3">Lun-Sam 8h-22h</td>
                        <td className="p-3">Support pour les lignes mobiles et forfaits</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-xl font-semibold mb-4">Contacts dédiés</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ContactCard 
                name="Sarah Bernard" 
                role="Responsable Support" 
                phone="06 45 67 89 01" 
                email="s.bernard@sfr.com" 
                department="Support Technique Business"
              />
              <ContactCard 
                name="Pierre Durand" 
                role="Chargé de Clientèle" 
                phone="06 56 78 90 12" 
                email="p.durand@sfr.com" 
                department="Service Client Pro"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="bouygues">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Numéros d'urgence - Bouygues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-md border">
                  <table className="w-full text-sm">
                    <thead className="bg-gestel-blue text-white">
                      <tr>
                        <th className="p-3 text-left font-medium">Service</th>
                        <th className="p-3 text-left font-medium">Numéro</th>
                        <th className="p-3 text-left font-medium">Horaires</th>
                        <th className="p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Support Technique Pro</td>
                        <td className="p-3">0 808 234 567</td>
                        <td className="p-3">7j/7 - 8h-22h</td>
                        <td className="p-3">Assistance technique pour les clients professionnels</td>
                      </tr>
                      <tr className="border-t bg-gestel-gray">
                        <td className="p-3 font-medium">Service Client Pro</td>
                        <td className="p-3">0 809 345 678</td>
                        <td className="p-3">Lun-Ven 8h-19h</td>
                        <td className="p-3">Gestion de la relation client et facturation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-xl font-semibold mb-4">Contacts dédiés</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ContactCard 
                name="Alexandre Moreau" 
                role="Ingénieur Réseau" 
                phone="06 67 89 01 23" 
                email="a.moreau@bouyguestelecom.fr" 
                department="Support Technique Pro"
              />
              <ContactCard 
                name="Marine Petit" 
                role="Responsable Grands Comptes" 
                phone="06 78 90 12 34" 
                email="m.petit@bouyguestelecom.fr" 
                department="Commercial Pro"
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="free">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Numéros d'urgence - Free</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-md border">
                  <table className="w-full text-sm">
                    <thead className="bg-gestel-blue text-white">
                      <tr>
                        <th className="p-3 text-left font-medium">Service</th>
                        <th className="p-3 text-left font-medium">Numéro</th>
                        <th className="p-3 text-left font-medium">Horaires</th>
                        <th className="p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3 font-medium">Support Pro</td>
                        <td className="p-3">0 811 345 678</td>
                        <td className="p-3">Lun-Sam 8h-21h</td>
                        <td className="p-3">Assistance globale pour les professionnels</td>
                      </tr>
                      <tr className="border-t bg-gestel-gray">
                        <td className="p-3 font-medium">Hotline Technique</td>
                        <td className="p-3">0 812 456 789</td>
                        <td className="p-3">7j/7 - 9h-20h</td>
                        <td className="p-3">Support technique pour les lignes et équipements</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="text-xl font-semibold mb-4">Contacts dédiés</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ContactCard 
                name="Julien Blanc" 
                role="Responsable Support Pro" 
                phone="06 89 01 23 45" 
                email="j.blanc@free.fr" 
                department="Support Technique Pro"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;
