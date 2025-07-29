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
  };
  slug: string;
  content: string;
  parent?: string;
};

export default function Sidebar({ docs }: { docs: DocType[] }) {
  const sidebar = useRef<HTMLDivElement>(null);
  const { sidebarOpen, setSidebarOpen } = useDocumentationProvider();
  const pathname = usePathname();
  const links = useScrollSpy();
  const [expandedParents, setExpandedParents] = useState<Set<string>>(new Set());

  // Group docs by parent
  const groupedDocs = docs.reduce((acc, doc) => {
    const parent = doc.metadata.parent || "General";
    if (!acc[parent]) {
      acc[parent] = [];
    }
    acc[parent].push(doc);
    return acc;
  }, {} as Record<string, DocType[]>);

  // Auto-expand parent if current page belongs to it
  useEffect(() => {
    const currentDoc = docs.find(doc => pathname.includes(doc.slug));
    if (currentDoc) {
      const parent = currentDoc.metadata.parent || "General";
      setExpandedParents(prev => new Set([...Array.from(prev), parent]));
    }
  }, [pathname, docs]);

  const toggleParent = (parent: string) => {
    setExpandedParents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(parent)) {
        newSet.delete(parent);
      } else {
        newSet.add(parent);
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
              <div className="mb-3 font-bold">Documentation</div>
              <ul className="space-y-4 text-sm">
                {Object.entries(groupedDocs).map(([parent, parentDocs]) => (
                  <li key={parent}>
                    {/* Parent Group Header */}
                    <button
                      onClick={() => toggleParent(parent)}
                      className={`relative flex w-full items-center justify-between text-gray-700 hover:text-gray-900 ${
                        expandedParents.has(parent) ? "font-medium" : ""
                      }`}
                    >
                      <span className="font-semibold">{parent}</span>
                      <svg
                        className={`shrink-0 fill-gray-400 transition-transform duration-200 ${
                          expandedParents.has(parent) ? "rotate-180" : ""
                        }`}
                        width="11"
                        height="7"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                      </svg>
                    </button>
                    
                    {/* Parent Group Content */}
                    {expandedParents.has(parent) && (
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
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
