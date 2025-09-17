"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer",
                        "border border-white/10 bg-card",
                        "hover:shadow-xl hover:shadow-primary/5",
                        "hover:-translate-y-1 will-change-transform",
                        item.colSpan && item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "shadow-lg -translate-y-1 shadow-primary/5":
                                item.hasPersistentHover,
                        }
                    )}
                    onClick={() => window.location.href = '/services'}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:1.5rem_1.5rem]" />
                    </div>

                    <div className="relative flex flex-col space-y-4 h-full justify-between">
                       <div>
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-secondary group-hover:bg-accent transition-all duration-300">
                                    {item.icon}
                                </div>
                                {item.status && (
                                    <span
                                        className={cn(
                                            "text-xs font-medium px-3 py-1 rounded-full",
                                            "bg-secondary/80 text-secondary-foreground/80"
                                        )}
                                    >
                                        {item.status}
                                    </span>
                                )}
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
                             <div className="flex items-center flex-wrap gap-2">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground/80"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                                {item.cta || "View More"} &rarr;
                            </span>
                        </div>
                    </div>

                     <div
                        className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-white/10 via-white/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />

                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
