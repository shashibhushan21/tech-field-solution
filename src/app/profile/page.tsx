'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, Calendar, Settings, FileText, CreditCard } from "lucide-react";
import { useState } from "react";

const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joinDate: "January 2024",
  avatar: "https://picsum.photos/150/150?random=1",
  bio: "Tech enthusiast and entrepreneur looking to build innovative digital solutions.",
  projects: [
    { id: 1, name: "E-commerce Platform", status: "In Progress", service: "Multi-Vendor Application", date: "Dec 2024" },
    { id: 2, name: "Company Website", status: "Completed", service: "Web Application", date: "Nov 2024" },
    { id: 3, name: "SEO Optimization", status: "Active", service: "SEO & Maintenance", date: "Ongoing" }
  ]
};

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback className="text-2xl">{mockUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h2 className="font-bold text-xl mb-2">{mockUser.name}</h2>
                <p className="text-muted-foreground mb-4">{mockUser.email}</p>
                <Badge variant="secondary" className="mb-4">Premium Member</Badge>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{mockUser.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{mockUser.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {mockUser.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" value={mockUser.name} disabled={!isEditing} suppressHydrationWarning />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={mockUser.email} disabled={!isEditing} suppressHydrationWarning />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" value={mockUser.phone} disabled={!isEditing} suppressHydrationWarning />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" value={mockUser.location} disabled={!isEditing} suppressHydrationWarning />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" value={mockUser.bio} disabled={!isEditing} rows={3} suppressHydrationWarning />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => setIsEditing(!isEditing)}
                        variant={isEditing ? "outline" : "default"}
                        suppressHydrationWarning
                      >
                        {isEditing ? "Cancel" : "Edit Profile"}
                      </Button>
                      {isEditing && (
                        <Button onClick={() => setIsEditing(false)} suppressHydrationWarning>
                          Save Changes
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Projects Tab */}
              <TabsContent value="projects" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      My Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockUser.projects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div>
                            <h3 className="font-semibold">{project.name}</h3>
                            <p className="text-sm text-muted-foreground">{project.service}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}>
                              {project.status}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">{project.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Email Notifications</h3>
                          <p className="text-sm text-muted-foreground">Receive updates about your projects</p>
                        </div>
                        <Button variant="outline" size="sm" suppressHydrationWarning>Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                        </div>
                        <Button variant="outline" size="sm" suppressHydrationWarning>Enable</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Privacy Settings</h3>
                          <p className="text-sm text-muted-foreground">Control your data and privacy</p>
                        </div>
                        <Button variant="outline" size="sm" suppressHydrationWarning>Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing" className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Billing & Payments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Current Plan</h3>
                        <p className="text-2xl font-bold text-primary">Premium</p>
                        <p className="text-sm text-muted-foreground">$99/month</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Next Billing</h3>
                        <p className="text-lg font-semibold">Jan 15, 2025</p>
                        <p className="text-sm text-muted-foreground">Auto-renewal enabled</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Payment Methods</h3>
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5" />
                          <span>•••• •••• •••• 4242</span>
                          <Badge variant="outline">Default</Badge>
                        </div>
                        <Button variant="outline" size="sm" suppressHydrationWarning>Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}