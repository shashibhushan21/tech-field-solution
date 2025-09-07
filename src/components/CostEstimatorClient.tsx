'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PRICING = {
  web: {
    base: 2500,
    pages: 150,
    auth: 1000,
    ecommerce: 2000,
  },
  mobile: {
    ios: 4000,
    android: 4000,
    crossPlatform: 6500,
    auth: 1200,
    inAppPurchases: 1500,
  },
  marketing: {
    seo: 800,
    smm: 600,
    ppc: 1200,
  },
};

export function CostEstimatorClient() {
  const [services, setServices] = useState<string[]>([]);
  
  // Web State
  const [webPages, setWebPages] = useState(5);
  const [webAuth, setWebAuth] = useState(false);
  const [webEcom, setWebEcom] = useState(false);

  // Mobile State
  const [mobilePlatform, setMobilePlatform] = useState('ios');
  const [mobileAuth, setMobileAuth] = useState(false);
  const [mobileIAP, setMobileIAP] = useState(false);

  // Marketing State
  const [marketingServices, setMarketingServices] = useState<string[]>([]);

  const [totalCost, setTotalCost] = useState(0);

  const webCost = useMemo(() => {
    if (!services.includes('web')) return 0;
    let cost = PRICING.web.base;
    cost += webPages * PRICING.web.pages;
    if (webAuth) cost += PRICING.web.auth;
    if (webEcom) cost += PRICING.web.ecommerce;
    return cost;
  }, [services, webPages, webAuth, webEcom]);

  const mobileCost = useMemo(() => {
    if (!services.includes('mobile')) return 0;
    let cost = 0;
    if (mobilePlatform === 'ios') cost += PRICING.mobile.ios;
    else if (mobilePlatform === 'android') cost += PRICING.mobile.android;
    else if (mobilePlatform === 'cross-platform') cost += PRICING.mobile.crossPlatform;
    
    if (mobileAuth) cost += PRICING.mobile.auth;
    if (mobileIAP) cost += PRICING.mobile.inAppPurchases;
    return cost;
  }, [services, mobilePlatform, mobileAuth, mobileIAP]);

  const marketingCost = useMemo(() => {
    if (!services.includes('marketing')) return 0;
    let cost = 0;
    if (marketingServices.includes('seo')) cost += PRICING.marketing.seo;
    if (marketingServices.includes('smm')) cost += PRICING.marketing.smm;
    if (marketingServices.includes('ppc')) cost += PRICING.marketing.ppc;
    return cost;
  }, [services, marketingServices]);

  useEffect(() => {
    setTotalCost(webCost + mobileCost + marketingCost);
  }, [webCost, mobileCost, marketingCost]);
  
  const handleServiceToggle = (service: string) => {
    setServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                {/* Service Selection */}
                <Card>
                    <CardHeader>
                        <CardTitle>1. Select Your Services</CardTitle>
                        <CardDescription>Choose one or more services you are interested in.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid sm:grid-cols-3 gap-4">
                        {['Web Application', 'Mobile App', 'Digital Marketing'].map(s => {
                            const serviceId = s.toLowerCase().split(' ')[0];
                            return (
                                <div key={serviceId} className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${services.includes(serviceId) ? 'bg-primary/10 border-primary' : 'bg-secondary'}`} onClick={() => handleServiceToggle(serviceId)}>
                                    <Checkbox checked={services.includes(serviceId)} id={serviceId} className="mr-3" />
                                    <Label htmlFor={serviceId} className="cursor-pointer">{s}</Label>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>

                {/* Web App Options */}
                {services.includes('web') && (
                    <Card>
                        <CardHeader>
                            <CardTitle>2. Web Application Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label>Number of Pages: {webPages}</Label>
                                <Slider defaultValue={[5]} min={1} max={50} step={1} onValueChange={(value) => setWebPages(value[0])} className="mt-2" />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="webAuth" checked={webAuth} onCheckedChange={(checked) => setWebAuth(!!checked)} />
                                <Label htmlFor="webAuth">User Authentication (Login/Signup)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="webEcom" checked={webEcom} onCheckedChange={(checked) => setWebEcom(!!checked)} />
                                <Label htmlFor="webEcom">E-commerce Functionality</Label>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Mobile App Options */}
                {services.includes('mobile') && (
                    <Card>
                        <CardHeader>
                            <CardTitle>3. Mobile App Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label>Platform</Label>
                                <RadioGroup defaultValue="ios" value={mobilePlatform} onValueChange={setMobilePlatform} className="mt-2 grid sm:grid-cols-3 gap-4">
                                    {['ios', 'android', 'cross-platform'].map(platform => (
                                        <div key={platform}>
                                            <RadioGroupItem value={platform} id={platform} className="peer sr-only" />
                                            <Label htmlFor={platform} className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                             <div className="flex items-center space-x-2">
                                <Checkbox id="mobileAuth" checked={mobileAuth} onCheckedChange={(checked) => setMobileAuth(!!checked)} />
                                <Label htmlFor="mobileAuth">User Authentication</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="mobileIAP" checked={mobileIAP} onCheckedChange={(checked) => setMobileIAP(!!checked)} />
                                <Label htmlFor="mobileIAP">In-App Purchases</Label>
                            </div>
                        </CardContent>
                    </Card>
                )}

                 {/* Digital Marketing Options */}
                {services.includes('marketing') && (
                    <Card>
                        <CardHeader>
                            <CardTitle>4. Digital Marketing Needs</CardTitle>
                            <CardDescription>Select desired monthly services.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-3 gap-4">
                            {['SEO', 'SMM', 'PPC'].map(s => {
                                const serviceId = s.toLowerCase();
                                return (
                                    <div key={serviceId} className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${marketingServices.includes(serviceId) ? 'bg-primary/10 border-primary' : 'bg-secondary'}`} onClick={() => setMarketingServices(prev => prev.includes(serviceId) ? prev.filter(item => item !== serviceId) : [...prev, serviceId])}>
                                        <Checkbox checked={marketingServices.includes(serviceId)} id={serviceId} className="mr-3" />
                                        <Label htmlFor={serviceId} className="cursor-pointer">{s}</Label>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Cost Summary */}
            <div className="lg:col-span-1">
                <Card className="sticky top-28">
                    <CardHeader>
                        <CardTitle>Estimated Cost</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-4xl font-bold text-center">
                            ${totalCost.toLocaleString()}
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {webCost > 0 && <li className="flex justify-between"><span>Web App</span> <span>${webCost.toLocaleString()}</span></li>}
                            {mobileCost > 0 && <li className="flex justify-between"><span>Mobile App</span> <span>${mobileCost.toLocaleString()}</span></li>}
                            {marketingCost > 0 && <li className="flex justify-between"><span>Marketing (monthly)</span> <span>${marketingCost.toLocaleString()}</span></li>}
                        </ul>
                        <p className="text-xs text-center text-muted-foreground pt-4">This is a rough estimate. Actual costs may vary based on project complexity.</p>
                         <Button size="lg" className="w-full" asChild>
                            <Link href="/contact">
                                Get a Precise Quote <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
