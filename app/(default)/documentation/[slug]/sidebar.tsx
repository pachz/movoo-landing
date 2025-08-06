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
};

export default function Sidebar({ docs }: { docs: DocType[] }) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useDocumentationProvider();
  const pathname = usePathname();
  const links = useScrollSpy();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  // Group docs by section and sort by rank
  const groupedDocs = docs.reduce((acc, doc) => {
    const section = doc.section || doc.metadata.section || "General";
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(doc);
    return acc;
  }, {} as Record<string, DocType[]>);

  // Sort documents within each section group by rank
  Object.keys(groupedDocs).forEach(section => {
    groupedDocs[section].sort((a, b) => {
      const rankA = parseInt(a.rank) || 99;
      const rankB = parseInt(b.rank) || 99;
      return rankA - rankB;
    });
  });

  // Auto-expand section if current page belongs to it
  useEffect(() => {
    const currentDoc = docs.find(doc => pathname.includes(doc.slug));
    if (currentDoc) {
      const section = currentDoc.section || currentDoc.metadata.section || "General";
      setExpandedSections(prev => new Set([...Array.from(prev), section]));
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
                    // Put "General" or "Documentation" first
                    if (sectionA === "General" || sectionA === "Documentation") return -1;
                    if (sectionB === "General" || sectionB === "Documentation") return 1;
                    return sectionA.localeCompare(sectionB);
                  })
                  .map(([section, sectionDocs]) => (
                  <li key={section}>
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(section)}
                      className={`relative flex w-full items-center justify-between text-gray-700 hover:text-gray-900 ${
                        expandedSections.has(section) ? "font-medium" : ""
                      }`}
                    >
                      <span className="font-bold">{section}</span>
                      <svg
                        className={`shrink-0 fill-gray-400 transition-transform duration-200 ${
                          expandedSections.has(section) ? "rotate-180" : ""
                        }`}
                        width="11"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                      </svg>
                    </button>
                    
                    {/* Section Content */}
                    {expandedSections.has(section) && (
                      <ul className="mt-2 space-y-2 pl-4">
                        {sectionDocs.map((doc: DocType, index: number) => (
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
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
