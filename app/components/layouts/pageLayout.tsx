import {ClassValue} from "clsx";
import React from "react";
import {cn} from "~/lib/utils";

interface PageLayoutProps {
  className?: ClassValue;
  children: React.ReactNode;
}
export function PageLayout({children, className}: PageLayoutProps) {
  return <main className={cn("h-[calc(100vh-50px)] container mx-auto pt-10", className)}>{children}</main>;
}
