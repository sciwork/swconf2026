"use client";

import { useState } from "react";
import routes from "@/configurations/routes";
import Drawer from "@/components/Drawer";
import DrawerLink from "@/components/DrawerLink";
import Logo from "@/components/Logo";

const MobileNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleParent = (path: string) => {
    setOpenMap((prev) => ({ ...prev, [path]: !prev[path] }));
  };
  const closeParent = (path: string) => {
    setOpenMap((prev) => ({ ...prev, [path]: false }));
  };
  return (
    <>
      <button
        type="button"
        className="tw:rounded-full tw:bg-sky-600 tw:px-4 tw:py-1 tw:text-base tw:font-bold tw:text-white tw:no-underline tw:shadow-sm tw:outline-none tw:hover:bg-sky-700 tw:focus:ring-2 tw:focus:ring-sky-200"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <Drawer show={isMenuOpen} onClick={toggleMenu}>
        <div className="tw:flex tw:h-screen tw:flex-col">
          <div className="tw:grow">
            <div className="tw:px-6 tw:pt-8 tw:pb-4" onClick={toggleMenu}>
              <Logo variant="light" />
            </div>
            <div>
              {routes
                .filter((route) => !route.disabled)
                .map((route) => {
                  if (route.children && route.children.length > 0) {
                    const isOpen = !!openMap[route.path];
                    return (
                      <div key={route.path}>
                        <button
                          type="button"
                          className="tw-w-full tw-text-left tw:block tw:py-2 tw:font-yk"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleParent(route.path);
                          }}
                        >
                          <div className="tw-leading-loose tw:px-7 tw:py-2 tw:text-2xl tw:font-medium tw:text-black tw:hover:text-sky-400">
                            {route.name}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="tw-pl-6 tw-pt-2">
                            {route.children.map((child) => (
                              <DrawerLink
                                key={child.path}
                                to={child.path}
                                secondary
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  closeParent(route.path);
                                }}
                              >
                                <span className="tw:px-8 tw:font-yk tw:text-base tw:leading-tight tw:font-normal tw:text-gray-400">
                                  {child.name}
                                </span>
                              </DrawerLink>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <DrawerLink
                      key={route.path}
                      to={route.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.name}
                    </DrawerLink>
                  );
                })}
            </div>
          </div>
          <div className="tw:border-t tw:border-t-gray-200 tw:pt-6 tw:pb-10">
            <p className="tw:px-6 tw:font-yk tw:leading-loose tw:font-medium tw:text-gray-400">
              Previous Conference
            </p>
            <DrawerLink to="https://conf2025.sciwork.dev/" secondary is_blank>
              sciwork conference 2025
            </DrawerLink>
            <DrawerLink to="https://conf2024.sciwork.dev/" secondary is_blank>
              sciwork conference 2024
            </DrawerLink>
            <DrawerLink to="https://conf2023.sciwork.dev/" secondary is_blank>
              sciwork conference 2023
            </DrawerLink>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigator;
