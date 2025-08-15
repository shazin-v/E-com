"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronUp,
  ChevronRight,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  IconCategory,
  IconCheckupList,
  IconKey,
  IconShieldPlus,
  IconUserCog,
  IconUserPentagon,
  IconUsers,
  IconUserShield,
} from "@tabler/icons-react";
import { ShieldUser } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavItems {
  title: string;
  icon: React.ComponentType<any>;
  url?: string;
  subItems?: {
    title: string;
    icon?: React.ComponentType<any>;
    //   icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    url?: string;
    subItems?: {
      title: string;
      icon?: React.ComponentType<any>;
      url: string;
    }[];
  }[];
}
interface NavItemsGroup {
  navigation: NavItems[];
}

const RBACItems: NavItems[] = [
  {
    title: "Admin",
    icon: ShieldUser,
    subItems: [
      {
        title: "Dashboard",
        icon: IconCategory,
        url: "/admin/dashboard",
      },
      {
        title: "Profile",
        url: "/admin/profile",
        icon: IconKey,
      },
      // {
      //   title: "Products",
      //   url: "/admin/roles",
      //   icon: IconShieldPlus,
      //   subItems: [
      //     {
      //       title: "Product List",
      //       url: "/admin/roles/system-roles",
      //       icon: IconUserCog,
      //     },
      //     {
      //       title: "Organization Roles",
      //       url: "/admin/roles/organization-roles",
      //       icon: IconUserShield,
      //     },
      //   ],
      // },
      {
        title: "Orders",
        url: "/admin/orders",
        icon: IconUserPentagon,
      },
      {
        title: "Users",
        url: "/admin/users",
        icon: IconUsers,
      },
      {
        title: "Products",
        url: "/admin/products",
        icon: IconCheckupList,
      },
    ],
  },
];

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Profile",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const EXPANDED_ITEMS_KEY = "sidebar-expanded-items";

export function AppSidebar() {
  const pathname = usePathname();
  const { setOpenMobile, openMobile } = useSidebar();

  const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
    // Start with empty set
    const expanded = new Set<string>();

    // Get persisted expanded items from localStorage (only runs on client side)
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(EXPANDED_ITEMS_KEY);
        if (saved) {
          const savedItems = JSON.parse(saved);
          savedItems.forEach((item: string) => expanded.add(item));
        }
      } catch (error) {
        console.warn("Failed to load expanded items from localStorage:", error);
      }
    }

    return expanded;
  });

  // Auto-expand items that contain the active path (run after component mounts)
  useEffect(() => {
    setExpandedItems((prev) => {
      const newExpanded = new Set(prev);

      // Find and expand items that contain the active path
      RBACItems.forEach((item) => {
        const hasActiveSubItem = item.subItems?.some((sub) => {
          if (sub.url && pathname.includes(sub.url)) {
            return true;
          }
          // Check sub-sub items
          return sub.subItems?.some((subSub) => pathname.includes(subSub.url));
        });

        if (hasActiveSubItem) {
          newExpanded.add(item.title);

          // Also expand the sub-item if it has active sub-sub items
          item.subItems?.forEach((sub) => {
            if (sub.subItems?.some((subSub) => pathname.includes(subSub.url))) {
              newExpanded.add(`${item.title}-${sub.title}`);
            }
          });
        }
      });

      return newExpanded;
    });
  }, [pathname, RBACItems]);

  // Persist expanded items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          EXPANDED_ITEMS_KEY,
          JSON.stringify(Array.from(expandedItems))
        );
      } catch (error) {
        console.warn("Failed to save expanded items to localStorage:", error);
      }
    }
  }, [expandedItems]);

  const isActive = useMemo(() => {
    return (path: string) => pathname.includes(path);
  }, [pathname]);

  const toggleExpanded = (key: string, level: number = 0) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(key)) {
        // If collapsing, remove this item and all its children
        const keysToRemove = Array.from(newSet).filter((k) =>
          k.startsWith(key + "-")
        );
        keysToRemove.forEach((k) => newSet.delete(k));
        newSet.delete(key);
      } else {
        // If expanding, first collapse siblings at the same level
        if (level === 0) {
          // Top level - collapse other top level items
          const topLevelKeys = Array.from(newSet).filter(
            (k) => !k.includes("-")
          );
          topLevelKeys.forEach((k) => {
            if (k !== key) {
              // Remove the top level item and all its children
              const childKeys = Array.from(newSet).filter((childK) =>
                childK.startsWith(k + "-")
              );
              childKeys.forEach((childK) => newSet.delete(childK));
              newSet.delete(k);
            }
          });
        } else {
          // Sub level - collapse siblings under the same parent
          const parentKey = key.split("-").slice(0, -1).join("-");
          const siblingPattern = new RegExp(
            `^${parentKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-[^-]+$`
          );

          Array.from(newSet).forEach((k) => {
            if (siblingPattern.test(k) && k !== key) {
              // Remove sibling and all its children
              const childKeys = Array.from(newSet).filter((childK) =>
                childK.startsWith(k + "-")
              );
              childKeys.forEach((childK) => newSet.delete(childK));
              newSet.delete(k);
            }
          });
        }

        // Add the new item
        newSet.add(key);
      }

      return newSet;
    });
  };

  const renderSubItems = (
    subItems: NavItems["subItems"],
    parentTitle: string,
    level: number = 1
  ) => {
    return subItems?.map((sub) => {
      const subKey = `${parentTitle}-${sub.title}`;
      const hasSubItems = sub.subItems && sub.subItems.length > 0;

      return (
        <SidebarMenuItem key={sub.title}>
          {hasSubItems ? (
            <Collapsible
              open={expandedItems.has(subKey)}
              onOpenChange={() => toggleExpanded(subKey, level)}
            >
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild className="font-semibold">
                  <button className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded min-h-[36px]">
                    <span className="flex items-center space-x-3 font-semibold">
                      {sub.icon && (
                        <sub.icon className="w-4 h-4 flex-shrink-0" />
                      )}
                      <span className="text-left">{sub.title}</span>
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 text-gray-500 transition-transform flex-shrink-0",
                        expandedItems.has(subKey) && "transform rotate-90"
                      )}
                    />
                  </button>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="collapsible-content animate-slideDown">
                <SidebarMenu className="pl-6 gap-1 mt-1">
                  {renderSubItems(sub.subItems, subKey, level + 1)}
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            <SidebarMenuButton
              asChild
              className={`font-medium ${
                sub.url && isActive(sub.url) ? "bg-[#D7E1EF]" : ""
              }`}
            >
              <Link
                href={sub.url ?? "#"}
                className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded font-semibold min-h-[36px]"
                onClick={() => setOpenMobile(false)}
              >
                <span className="flex items-center space-x-3">
                  {sub.icon && (
                    <sub.icon className="w-4 h-4 text-[#003792] flex-shrink-0" />
                  )}
                  <span>{sub.title}</span>
                </span>
              </Link>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      );
    });
  };

  return (
    <>
      <Sidebar className="pt-20">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {RBACItems.map((item) =>
                  item.subItems && item.subItems.length > 0 ? (
                    <SidebarMenuItem key={item.title}>
                      <Collapsible
                        open={expandedItems.has(item.title)}
                        onOpenChange={() => toggleExpanded(item.title, 0)}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton asChild className="font-semibold">
                            <button className="w-full flex items-center justify-between px-2 py-2 hover:bg-gray-100 rounded min-h-[36px]">
                              <span className="flex items-center space-x-3 font-semibold">
                                {item.icon && (
                                  <item.icon className="w-4 h-4 flex-shrink-0" />
                                )}
                                <span className="text-left">{item.title}</span>
                              </span>
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 text-gray-500 transition-transform flex-shrink-0",
                                  expandedItems.has(item.title) &&
                                    "transform rotate-90"
                                )}
                              />
                            </button>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="collapsible-content animate-slideDown">
                          <SidebarMenu className="pl-6 gap-1 mt-1">
                            {renderSubItems(item.subItems, item.title)}
                          </SidebarMenu>
                        </CollapsibleContent>
                      </Collapsible>
                    </SidebarMenuItem>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`font-medium ${
                          item.url && isActive(item.url) ? "bg-[#D7E1EF]" : ""
                        }`}
                      >
                        <Link
                          href={item.url ?? "#"}
                          className="flex items-center space-x-3 px-2 py-2 hover:bg-gray-100 rounded font-semibold min-h-[36px]"
                          onClick={() => setOpenMobile(false)}
                        >
                          <span className="flex items-center space-x-3">
                            {item.icon && (
                              <item.icon className="w-4 h-4 text-[#003792] flex-shrink-0" />
                            )}
                            <span>{item.title}</span>
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          {/* <Logout fromSidebar /> */}
          <div className="text-xs text-gray-500 px-4 py-2 w-full border-t border-gray-200 ">
            Version 1.0.0
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
