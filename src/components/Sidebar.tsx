"use client";

import {
  Columns3,
  Bot,
  Monitor,
  Rows4,
  Zap,
  MonitorPlay,
  Shield,
  BookOpenCheck,
  Library,
  IdCard,
  Cog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarItem {
  name: string;
  items?: {
    itemName: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    path?: string;
  }[];
}

const Sidebar = () => {
  const pathName = usePathname();

  const sidebarItems: SidebarItem[] = [
    {
      name: "MY PROJECTS",
      items: [
        {
          itemName: "Agents",
          icon: Bot,
        },
        {
          itemName: "AI Models",
          icon: Zap,
        },
        {
          itemName: "Library",
          icon: Library,
        },
      ],
    },
    {
      name: "ORCHESTRATOR",
      items: [
        {
          itemName: "Published",
          icon: Bot,
        },
        {
          itemName: "Machines",
          icon: Monitor,
        },
        {
          itemName: "Queues",
          icon: Rows4,
        },
        {
          itemName: "Triggers",
          icon: Zap,
        },
        {
          itemName: "Jobs",
          icon: MonitorPlay,
        },
        {
          itemName: "Executions",
          icon: MonitorPlay,
        },
        {
          itemName: "Vault",
          icon: Shield,
        },
        {
          itemName: "Knowledge Base",
          icon: BookOpenCheck,
          path: "/KnowledgeBase",
        },
        {
          itemName: "Key Store",
          icon: IdCard,
        },
      ],
    },
    {
      name: "ADMIN",
      items: [
        {
          itemName: "Tenant",
          icon: Cog,
        },
        {
          itemName: "Integrations",
          icon: Columns3,
        },
      ],
    },
  ];

  return (
    <>
      <section className="ml-5 w-64 min-w-[16rem] pr-2 flex-shrink-0 border-r border-gray-200">
        {sidebarItems.map((section) => (
          <section key={section.name}>
            <h3 className="text-gray-400 text-sm mt-1.5">{section.name}</h3>
            <ul>
              {section.items?.map((item) => {
                const isActive = pathName === item.path;
                console.log(isActive, pathName, item.path);
                return (
                  <li key={item.itemName}>
                    <Link
                      href={item.path || "/"}
                      className={`ml-2 mb-0.5 p-1.5 flex items-center gap-2 rounded-sm cursor-pointer  ${isActive ? "text-[var(--secondary-color)] bg-blue-100 border-l-2 border-[var(--primary-color)]" : "hover:bg-blue-100 hover:border-l-2 hover:border-[var(--primary-color)] hover:text-[var(--secondary-color)]"}`}
                    >
                      <span>
                        {item.icon && <item.icon className="w-4 h-4" />}
                      </span>
                      {item.itemName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </section>
    </>
  );
};

export default Sidebar;
