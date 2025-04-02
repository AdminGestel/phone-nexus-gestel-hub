
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  Phone,
  Users,
  Globe,
  BookOpen,
  LifeBuoy,
  Settings,
  LogOut,
} from 'lucide-react';

const AppSidebar = () => {
  const { logout, user } = useAuth();
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Tableau de bord',
      icon: <Phone className="mr-2 h-4 w-4" />,
      href: '/dashboard',
      roles: ['admin', 'hr', 'it', 'readonly'],
    },
    {
      title: 'Salariés',
      icon: <Users className="mr-2 h-4 w-4" />,
      href: '/employees',
      roles: ['admin', 'hr', 'it', 'readonly'],
    },
    {
      title: 'Lignes Internet',
      icon: <Globe className="mr-2 h-4 w-4" />,
      href: '/internet-lines',
      roles: ['admin', 'it', 'readonly'],
    },
    {
      title: 'Support Technique',
      icon: <LifeBuoy className="mr-2 h-4 w-4" />,
      href: '/support',
      roles: ['admin', 'it', 'readonly'],
    },
    {
      title: 'Paramètres',
      icon: <Settings className="mr-2 h-4 w-4" />,
      href: '/settings',
      roles: ['admin'],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="py-4">
        <div className="flex items-center px-4">
          <Phone className="h-6 w-6 text-white mr-2" />
          <h1 className="text-white font-bold">GESTEL</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => {
            // Only show menu items the user has access to
            if (user && item.roles.includes(user.role)) {
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild data-active={location.pathname === item.href}>
                    <Link to={item.href} className={cn(
                      "flex items-center",
                      location.pathname === item.href 
                        ? "text-white bg-sidebar-accent" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    )}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }
            return null;
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2">
          <button
            onClick={logout}
            className="flex items-center text-sidebar-foreground hover:text-white w-full px-2 py-2 rounded-md"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Déconnexion</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
