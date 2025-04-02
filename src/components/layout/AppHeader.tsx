
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';

const AppHeader = () => {
  const { user } = useAuth();
  
  return (
    <header className="bg-white border-b h-16 flex items-center px-4 justify-between">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold text-gestel-blue ml-4">
          GESTEL
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        {user && (
          <div className="flex items-center">
            <div className="mr-3 text-right hidden sm:block">
              <div className="text-sm font-medium">{user.name}</div>
              <div className="text-xs text-muted-foreground capitalize">{user.role}</div>
            </div>
            <Avatar>
              <AvatarFallback className="bg-gestel-blue text-white">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
