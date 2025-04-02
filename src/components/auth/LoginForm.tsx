
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!showTwoFactor) {
      // First step: just validate email and password
      if (email && password) {
        setShowTwoFactor(true);
      }
      setIsLoading(false);
      return;
    }

    // Second step: include 2FA code
    const success = await login(email, password, twoFactorCode);
    if (success) {
      navigate('/dashboard');
    }
    
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gestel-blue rounded-full p-3">
            <Phone className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center">GESTEL</CardTitle>
        <CardDescription className="text-center">
          Gestion de la téléphonie d'entreprise
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!showTwoFactor ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="email@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="twoFactorCode">Code d'authentification</Label>
              <Input
                id="twoFactorCode"
                placeholder="Entrez le code à 6 chiffres"
                value={twoFactorCode}
                onChange={(e) => setTwoFactorCode(e.target.value)}
                required
                autoFocus
              />
              <p className="text-sm text-muted-foreground mt-2">
                Un code a été envoyé à votre appareil mobile. Pour la démo, utilisez 123456.
              </p>
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Chargement...' : showTwoFactor ? 'Vérifier' : 'Connexion'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <div className="text-sm text-muted-foreground">
          {showTwoFactor ? (
            <button 
              onClick={() => setShowTwoFactor(false)}
              className="underline hover:text-primary"
            >
              Retour à la connexion
            </button>
          ) : (
            <p>Utilisez admin@gestel.com / admin123 pour la démo</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
