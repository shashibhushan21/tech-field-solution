'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Button } from './ui/button';
import { ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const PRICING = {
  web: {
    base: 2500,
    pages: 150,
    auth: 1000,
    ecommerce: 2000,
    cms: 1200,
    design: {
      standard: 0,
      premium: 1500,
      custom: 3000,
    }
  },
  mobile: {
    ios: 4000,
    android: 4000,
    crossPlatform: 6500,
    auth: 1200,
    inAppPurchases: 1500,
    api: 1800,
    push: 800,
  },
  marketing: {
    seo: 800,
    smm: 600,
    ppc: 1200,
    content: 1000,
  },
};

export function CostEstimatorClient() {
  const [services, setServices] = useState<string[]>([]);
  
  // Web State
  const [webPages, setWebPages] = useState(5);
  const [webDesign, setWebDesign] = useState('standard');
  const [webAuth, setWebAuth] = useState(false);
  const [webEcom, setWebEcom] = useState(false);
  const [webCms, setWebCms] = useState(false);

  // Mobile State
  const [mobilePlatform, setMobilePlatform] = useState('ios');
  const [mobileAuth, setMobileAuth] = useState(false);
  const [mobileIAP, setMobileIAP] = useState(false);
  const [mobileApi, setMobileApi] = useState(false);
  const [mobilePush, setMobilePush] = useState(false);

  // Marketing State
  const [marketingServices, setMarketingServices] = useState<string[]>([]);

  const [totalCost, setTotalCost] = useState(0);

  const webCost = useMemo(() => {
    if (!services.includes('web')) return 0;
    let cost = PRICING.web.base;
    cost += webPages * PRICING.web.pages;
    cost += PRICING.web.design[webDesign as keyof typeof PRICING.web.design] || 0;
    if (webAuth) cost += PRICING.web.auth;
    if (webEcom) cost += PRICING.web.ecommerce;
    if (webCms) cost += PRICING.web.cms;
    return cost;
  }, [services, webPages, webDesign, webAuth, webEcom, webCms]);

  const mobileCost = useMemo(() => {
    if (!services.includes('mobile')) return 0;
    let cost = 0;
    if (mobilePlatform === 'ios') cost += PRICING.mobile.ios;
    else if (mobilePlatform === 'android') cost += PRICING.mobile.android;
    else if (mobilePlatform === 'cross-platform') cost += PRICING.mobile.crossPlatform;
    
    if (mobileAuth) cost += PRICING.mobile.auth;
    if (mobileIAP) cost += PRICING.mobile.inAppPurchases;
    if (mobileApi) cost += PRICING.mobile.api;
    if (mobilePush) cost += PRICING.mobile.push;
    return cost;
  }, [services, mobilePlatform, mobileAuth, mobileIAP, mobileApi, mobilePush]);

  const marketingCost = useMemo(() => {
    if (!services.includes('marketing')) return 0;
    let cost = 0;
    if (marketingServices.includes('seo')) cost += PRICING.marketing.seo;
    if (marketingServices.includes('smm')) cost += PRICING.marketing.smm;
    if (marketingServices.includes('ppc')) cost += PRICING.marketing.ppc;
    if (marketingServices.includes('content')) cost += PRICING.marketing.content;
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

  const FeatureCheckbox = ({ id, label, checked, onCheckedChange, tooltip }: { id: string, label: string, checked: boolean, onCheckedChange: (checked: boolean) => void, tooltip?: string }) => (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={(checked) => onCheckedChange(!!checked)} />
      <Label htmlFor={id} className="flex items-center gap-2">{label}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </Label>
    </div>
  );

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
                            <div>
                              <Label>Design Quality</Label>
                              <Select value={webDesign} onValueChange={setWebDesign}>
                                <SelectTrigger className="mt-2">
                                  <SelectValue placeholder="Select design quality" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="standard">Standard Template</SelectItem>
                                  <SelectItem value="premium">Premium Template</SelectItem>
                                  <SelectItem value="custom">Fully Custom Design</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <FeatureCheckbox id="webAuth" label="User Authentication" checked={webAuth} onCheckedChange={setWebAuth} tooltip="Login, signup, and user profiles." />
                              <FeatureCheckbox id="webEcom" label="E-commerce" checked={webEcom} onCheckedChange={setWebEcom} tooltip="Shopping cart, checkout, and payment integration." />
                              <FeatureCheckbox id="webCms" label="CMS Integration" checked={webCms} onCheckedChange={setWebCms} tooltip="Manage your own content (e.g., blog posts, pages)." />
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
                                                {platform.charAt(0).toUpperCase() + platform.slice(1).replace('-', ' ')}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <FeatureCheckbox id="mobileAuth" label="User Authentication" checked={mobileAuth} onCheckedChange={setMobileAuth} />
                              <FeatureCheckbox id="mobileIAP" label="In-App Purchases" checked={mobileIAP} onCheckedChange={setMobileIAP} />
                              <FeatureCheckbox id="mobileApi" label="API Integration" checked={mobileApi} onCheckedChange={setMobileApi} tooltip="Connect your app to third-party services or your own backend." />
                              <FeatureCheckbox id="mobilePush" label="Push Notifications" checked={mobilePush} onCheckedChange={setMobilePush} />
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
                        <CardContent className="grid sm:grid-cols-2 gap-4">
                            {[{id: 'seo', name: 'SEO'}, {id: 'smm', name: 'Social Media'}, {id: 'ppc', name: 'PPC Advertising'}, {id: 'content', name: 'Content Creation'}].map(s => {
                                return (
                                    <div key={s.id} className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${marketingServices.includes(s.id) ? 'bg-primary/10 border-primary' : 'bg-secondary'}`} onClick={() => setMarketingServices(prev => prev.includes(s.id) ? prev.filter(item => item !== s.id) : [...prev, s.id])}>
                                        <Checkbox checked={marketingServices.includes(s.id)} id={s.id} className="mr-3" />
                                        <Label htmlFor={s.id} className="cursor-pointer">{s.name}</Label>
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
