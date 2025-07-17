import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Contact, 
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Award
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
    <Sidebar className={collapsed ? "w-20" : "w-80"} collapsible="icon">
      <SidebarHeader className="p-8 bg-gradient-to-br from-sidebar to-sidebar-accent border-b border-sidebar-border">
        <Link to="/" className="flex items-center group">
          <div className="relative w-16 h-16 mr-5">
            <div className="absolute inset-0 flex items-center justify-center bg-white rounded-3xl shadow-strong group-hover:shadow-glow transition-all duration-300 border border-white/10 animate-glow">
              <img
                src="/lovable-uploads/7fd02047-10b5-4456-9c21-26291d67a59b.png"
                alt="ESTIM Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 animate-glow-pulse"></div>
          </div>
          {!collapsed && (
            <div className="animate-slide-up">
              <span className="font-bold text-3xl gradient-text font-heading">
                ESTIM
              </span>
              <div className="text-sm text-sidebar-foreground/80 -mt-1 font-medium">
                École Supérieure de Technologie
              </div>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="p-6 bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-sidebar-foreground mb-6 px-2 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-secondary" />
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.href}
                      className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-l-4 border-primary shadow-glow'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-primary hover:shadow-medium'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      <item.icon className="w-7 h-7 relative z-10" />
                      {!collapsed && (
                        <span className="font-semibold text-lg relative z-10">
                          {item.name}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-bold text-sidebar-foreground mb-6 px-2 flex items-center">
              <Award className="w-5 h-5 mr-2 text-secondary" />
              Admission
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-4">
                <Link to="/pre-registration" className="w-full">
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="w-full btn-outline"
                  >
                    Pré-inscription
                  </Button>
                </Link>
                <Link to="/complete-registration" className="w-full">
                  <Button 
                    size="lg"
                    className="w-full btn-primary"
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
        <SidebarFooter className="p-6 border-t border-sidebar-border bg-sidebar-accent/50">
          <div className="space-y-4 text-base text-sidebar-foreground">
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sidebar-accent transition-colors duration-200">
              <Phone className="w-5 h-5 text-primary" />
              <span>+212 522 XXX XXX</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sidebar-accent transition-colors duration-200">
              <Mail className="w-5 h-5 text-primary" />
              <span>contact@estim-edu.com</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-sidebar-accent transition-colors duration-200">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}