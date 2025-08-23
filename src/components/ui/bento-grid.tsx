"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
    Palette,
    Code,
    Rocket,
    Megaphone,
    Search
} from "lucide-react";
import Link from 'next/link';

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <Link
                    href={item.href}
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-white/10 bg-secondary/50",
                        "hover:shadow-xl hover:shadow-primary/10",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan ? `md:col-span-${item.colSpan}` : "md:col-span-1",
                        {
                            "shadow-lg -translate-y-1 shadow-primary/10":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_1px,transparent_1px)] bg-[length:1.5rem_1.5rem]" />

                    </div>

                    <div className="relative flex flex-col space-y-4 h-full justify-between">
                       <div>
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                                    {item.icon}
                                </div>
                               
                            </div>

                            <div className="space-y-2 mt-4">
                                <h3 className="font-bold text-foreground tracking-tight text-lg">
                                    {item.title}
                                    {item.meta && (
                                        <span className="ml-2 text-xs text-muted-foreground font-normal">
                                            {item.meta}
                                        </span>
                                    )}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-snug">
                                    {item.description}
                                </p>
                            </div>
                       </div>

                        <div className="flex items-center justify-between mt-4">
                             <div className="flex items-center space-x-2">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                {item.cta || "View More"} &rarr;
                            </span>
                        </div>
                    </div>

                     <div
                        className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-primary/20 via-white/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />

                </Link>
            ))}
        </div>
    );
}

export { BentoGrid }
