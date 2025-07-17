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
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'À propos', href: '/#about', icon: Info },
  { name: 'Filières', href: '/#tracks', icon: BookOpen },
  { name: 'Contact', href: '/#contact', icon: Contact },
];

const admissionItems = [
  { name: 'Pré-inscription', href: '/pre-registration', icon: FileText },
  { name: 'Inscription complète', href: '/complete-registration', icon: GraduationCap },
  { name: 'Conditions d\'admission', href: '/#admission', icon: UserPlus },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.hash === path.split('#')[1];
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-80"} collapsible="icon">
      <SidebarHeader className="p-6 border-b border-border">
        <Link to="/" className="flex items-center group">
          <div className="relative w-12 h-12 mr-4">
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
              <img
                src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                alt="ESTIM Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-estim-green/20 to-estim-gold/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          </div>
          {!collapsed && (
            <div>
              <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold group-hover:from-estim-darkGreen group-hover:to-estim-gold transition-all duration-300">
                ESTIM
              </span>
              <div className="text-xs text-gray-600 -mt-1 font-medium">
                École Supérieure de Technologie
              </div>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-gray-700 mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-estim-green/10 to-estim-gold/10 text-estim-green border-l-4 border-estim-green'
                          : 'text-gray-700 hover:bg-estim-green/5 hover:text-estim-green'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="font-medium">{item.name}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-semibold text-gray-700 mb-2">
            Admission
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {admissionItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-estim-green/10 to-estim-gold/10 text-estim-green border-l-4 border-estim-green'
                          : 'text-gray-700 hover:bg-estim-green/5 hover:text-estim-green'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="font-medium">{item.name}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm font-semibold text-gray-700 mb-2">
              Actions rapides
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-3">
                <Link to="/pre-registration" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-estim-green text-estim-green hover:bg-estim-green hover:text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Pré-inscription
                  </Button>
                </Link>
                <Link to="/complete-registration" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    S'inscrire maintenant
                  </Button>
                </Link>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="p-4 border-t border-border">
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-estim-green" />
              <span>+212 522 XXX XXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-estim-green" />
              <span>contact@estim-edu.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-estim-green" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}