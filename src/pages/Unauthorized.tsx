
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ShieldX } from 'lucide-react';

const Unauthorized = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-red-100 p-3 rounded-full mb-4">
        <ShieldX className="h-10 w-10 text-red-600" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Accès non autorisé</h1>
      <p className="text-center mb-6 text-muted-foreground max-w-md">
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page. 
        Veuillez contacter votre administrateur si vous pensez qu'il s'agit d'une erreur.
      </p>
      <div className="flex space-x-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Retour
        </Button>
        <Button onClick={() => navigate('/dashboard')}>
          Tableau de bord
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
