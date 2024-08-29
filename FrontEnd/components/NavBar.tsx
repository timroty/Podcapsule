"use client";

import React from "react";
import {
  Navbar as NavBarNextUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Profile", redirect: "/profile" },
    { name: "Podcasts", redirect: "/podcasts" },
    { name: "Search", redirect: "/search" },
    { name: "Help & Feedback", redirect: "/help" },
    { name: "Log Out", redirect: "" },
  ];

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <NavBarNextUi onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand>
          <Image
            src={`/logo-light.png`}
            alt={"Podcapsule logo"}
            width="22"
            height="22"
          />
          <p className="font-bold text-inherit ml-4">Podcapsule</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" as="div">
        <NavbarItem></NavbarItem>
      </NavbarContent>
      <NavbarMenu className="lg:pl-10 xl:pl-72">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            {index === menuItems.length - 1 ? (
              <button
                onClick={signOut}
                className="w-full text-left text-danger"
              >
                {item.name}
              </button>
            ) : (
              <Link
                color="foreground"
                className="w-full"
                href={item.redirect}
                size="lg"
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavBarNextUi>
  );
}
