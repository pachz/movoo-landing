"use client";

import { useRef, useEffect, useState } from "react";
import { useDocumentationProvider } from "./documentation-provider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useScrollSpy from "@/utils/useScrollspy";

type DocType = {
  metadata: {
    title: string;
    publishedAt: string;
    updatedAt?: string;
    summary?: string;
    author?: string;
    authorImg?: string;
    kind?: string;
    parent?: string;
    section?: string;
  };
  slug: string;
  content: string;
  parent?: string;
  rank: string;
  section?: string;
  next?: string;
  prev?: string;
};

export default function Sidebar({ docs }: { docs: DocType[] }) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useDocumentationProvider();
  const pathname = usePathname();
  const links = useScrollSpy();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  // Group docs by section first, then by parent
  const groupedDocs = docs.reduce((acc, doc) => {
    // Use explicit section, or derive from parent, or default to "General"
    let section = doc.section || doc.metadata.section;
    if (!section) {
      const parent = doc.parent || doc.metadata.parent;
      if (parent) {
        // Extract section name from parent (e.g., "1. What Is Muvx ?" -> "What Is Muvx")
        const match = parent.match(/^\d+\.\s*(.+?)\s*$/);
        if (match) {
          section = match[1].trim();
        } else {
          section = parent;
        }
      } else {
        section = "General";
      }
    }
    
    const parent = doc.parent || doc.metadata.parent || "General";
    
    if (!acc[section]) {
      acc[section] = {};
    }
    if (!acc[section][parent]) {
      acc[section][parent] = [];
    }
    acc[section][parent].push(doc);
    return acc;
  }, {} as Record<string, Record<string, DocType[]>>);

  // Sort documents within each parent group by rank
  Object.keys(groupedDocs).forEach(section => {
    Object.keys(groupedDocs[section]).forEach(parent => {
      groupedDocs[section][parent].sort((a, b) => {
        const rankA = parseInt(a.rank) || 99;
        const rankB = parseInt(b.rank) || 99;
        return rankA - rankB;
      });
    });
  });

  // Auto-expand section and parent if current page belongs to it
  useEffect(() => {
    const currentDoc = docs.find(doc => pathname.includes(doc.slug));
    if (currentDoc) {
      // Determine section using the same logic as above
      let section = currentDoc.section || currentDoc.metadata.section;
      if (!section) {
        const parent = currentDoc.parent || currentDoc.metadata.parent;
        if (parent) {
          // Extract section name from parent (e.g., "1. What Is Muvx ?" -> "What Is Muvx")
          const match = parent.match(/^\d+\.\s*(.+?)\s*$/);
          if (match) {
            section = match[1].trim();
          } else {
            section = parent;
          }
        } else {
          section = "General";
        }
      }
      
      const parent = currentDoc.parent || currentDoc.metadata.parent || "General";
      setExpandedSections(prev => new Set([...Array.from(prev), section, parent]));
    }
  }, [pathname, docs]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900/20 md:hidden transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        ref={sidebar}
        id="sidebar"
        className={`w-[268px] [border-image:linear-gradient(to_bottom,var(--color-slate-200),var(--color-slate-300),transparent)1] max-md:fixed max-md:inset-y-0 max-md:left-0 max-md:z-50 max-md:h-screen max-md:bg-gray-50 md:block md:shrink-0 md:border-r transform transition-transform duration-200 ease-out ${
          sidebarOpen ? "translate-x-0" : "max-md:-translate-x-full max-md:opacity-0"
        }`}
      >
        <div className="no-scrollbar sticky top-24 overflow-y-auto px-8 py-4 max-md:fixed max-md:inset-y-0 max-md:w-[268px] md:py-2">
          {/* Docs nav */}
          <nav className="space-y-8 md:block">
            <div>
              <ul className="space-y-4 text-sm">
                {Object.entries(groupedDocs)
                  .sort(([sectionA], [sectionB]) => {
                    // Sort sections alphabetically, but put "General" first if it exists
                    if (sectionA === "General") return -1;
                    if (sectionB === "General") return 1;
                    return sectionA.localeCompare(sectionB);
                  })
                  .map(([section, parentGroups]) => (
                  <li key={section}>
                    {/* Section Header - Always visible */}
                    <div className="relative flex w-full items-center justify-between text-gray-700">
                      <span className="font-bold">{section}</span>
                    </div>
                    
                    {/* Section Content - Always expanded */}
                    <ul className="mt-2 space-y-2 pl-4">
                      {Object.entries(parentGroups)
                        .sort(([parentA], [parentB]) => {
                          // Put "General" first within each section
                          if (parentA === "General") return -1;
                          if (parentB === "General") return 1;
                          return parentA.localeCompare(parentB);
                        })
                        .map(([parent, parentDocs]) => (
                        <li key={parent}>
                          {/* Parent Header - Collapsible */}
                          <button
                            onClick={() => toggleSection(parent)}
                            className={`relative flex w-full items-center justify-between text-gray-700 hover:text-gray-900 ${
                              expandedSections.has(parent) ? "font-medium" : ""
                            }`}
                          >
                            <span className="font-medium">{parent}</span>
                            <svg
                              className={`shrink-0 fill-gray-400 transition-transform duration-200 ${
                                expandedSections.has(parent) ? "rotate-180" : ""
                              }`}
                              width="11"
                              height="7"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                            </svg>
                          </button>
                          
                          {/* Parent Content */}
                          {expandedSections.has(parent) && (
                            <ul className="mt-2 space-y-2 pl-4">
                              {parentDocs.map((doc: DocType, index: number) => (
                                <li key={index}>
                                  <Link
                                    href={`/documentation/${doc.slug}`}
                                    className={`relative flex items-center text-gray-700 hover:text-gray-900 ${
                                      pathname.includes(doc.slug) ? "font-medium" : ""
                                    }`}
                                  >
                                    {doc.metadata.kind === "detailed" ? (
                                      <>
                                        <svg
                                          className={`absolute -left-5 shrink-0 fill-gray-400 ${
                                            pathname.includes(doc.slug) ? "" : "-rotate-90"
                                          }`}
                                          width="11"
                                          height="7"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                                        </svg>
                                        <span>{doc.metadata.title}</span>
                                      </>
                                    ) : (
                                      doc.metadata.title
                                    )}
                                  </Link>
                                  {doc.metadata.kind === "detailed" &&
                                  pathname.includes(doc.slug) ? (
                                    <ul className="mt-2 space-y-2 pl-4">
                                      {links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                          <a
                                            data-scrollspy-link
                                            className="text-gray-500 hover:text-gray-900"
                                            href={`#${link.id}`}
                                          >
                                            {link.innerText}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
