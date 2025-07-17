import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Info, 
  BookOpen, 
  UserPlus, 
  Contact, 
  FileText,
  GraduationCap,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from './ui/sidebar';
import { Button } from './ui/button';

const navigationItems = [
  { name: 'Nos filières', href: '/tracks', icon: BookOpen },
  { name: 'Nos contacts', href: '/contact', icon: Contact },
  { name: 'Admission', href: '/admission', icon: GraduationCap },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <Sidebar className={collapsed ? "w-20" : "w-96"} collapsible="icon">
      <SidebarHeader className="p-8 border-b border-border">
        <Link to="/" className="flex items-center group">
          <div className="relative w-16 h-16 mr-5">
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                alt="ESTIM Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          </div>
          {!collapsed && (
            <div>
              <span className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold group-hover:from-estim-darkGreen group-hover:to-estim-gold transition-all duration-300">
                ESTIM
              </span>
              <div className="text-sm text-gray-600 -mt-1 font-medium">
                École Supérieure de Technologie
              </div>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-gray-700 mb-4 px-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-estim-green/15 to-estim-gold/15 text-estim-green border-l-4 border-estim-green shadow-lg'
                          : 'text-gray-700 hover:bg-estim-green/8 hover:text-estim-green hover:shadow-md'
                      }`}
                    >
                      <item.icon className="w-7 h-7" />
                      {!collapsed && <span className="font-semibold text-lg">{item.name}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-bold text-gray-700 mb-4 px-2">
              Admission
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-4">
                <Link to="/pre-registration" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="w-full border-3 border-estim-green text-estim-green hover:bg-estim-green hover:text-white font-bold py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Pré-inscription
                  </Button>
                </Link>
                <Link to="/complete-registration" className="w-full">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-bold py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                  >
                    Inscription complète
                  </Button>
                </Link>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="p-6 border-t border-border">
          <div className="space-y-4 text-base text-gray-600">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-estim-green" />
              <span>+212 522 XXX XXX</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-estim-green" />
              <span>contact@estim-edu.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-estim-green" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}