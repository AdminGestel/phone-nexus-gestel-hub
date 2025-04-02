
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Globe, Phone, LifeBuoy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon,
  path,
}: { 
  title: string; 
  value: string | number; 
  description: string; 
  icon: React.ElementType;
  path: string;
}) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="card-hover cursor-pointer" 
      onClick={() => navigate(path)}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Icon className="h-5 w-5 text-gestel-blue" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard 
          title="Salariés" 
          value={124} 
          description="Gestion des fiches salariés" 
          icon={Users}
          path="/employees"
        />
        <DashboardCard 
          title="Lignes Internet" 
          value={43} 
          description="ADSL & Fibre par localisation" 
          icon={Globe}
          path="/internet-lines"
        />
        <DashboardCard 
          title="Téléphones" 
          value={205} 
          description="Smartphones & tablettes" 
          icon={Phone}
          path="/employees"
        />
        <DashboardCard 
          title="Support" 
          value={18} 
          description="Contacts opérateurs" 
          icon={LifeBuoy}
          path="/support"
        />
      </div>
      
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Activité récente</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {[
                { date: "Aujourd'hui, 10:45", action: "Mise à jour fiche salarié", user: "Sophie Martin", details: "Modification du numéro de téléphone" },
                { date: "Hier, 15:20", action: "Nouvelle ligne Internet", user: "Thomas Dupont", details: "Installation fibre au site de Lyon" },
                { date: "11 Mai 2023, 09:30", action: "Nouveau salarié", user: "Claire Dubois", details: "Ajout de Jean Dupuis - Service Commercial" },
                { date: "10 Mai 2023, 14:15", action: "Contact support", user: "Luc Moreau", details: "Appel Bouygues - problème connexion site Paris" },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-gestel-blue mt-2 mr-3"></div>
                  <div className="flex-1">
                    <div className="flex justify-between flex-col md:flex-row">
                      <p className="font-medium">{item.action}</p>
                      <time className="text-muted-foreground text-sm">{item.date}</time>
                    </div>
                    <p className="text-sm text-muted-foreground">Par {item.user}</p>
                    <p className="text-sm mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
