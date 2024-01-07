import React from "react";
import logo from '../../../assets/images/brand-icon.png'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, DropdownMenu, DropdownItem, Dropdown, DropdownTrigger, Avatar } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function TopNavUser() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];


    const menuItem = [
        { name: 'Home', to: '/' },
        { name: 'Pricings', to: '/pricing' },
        { name: 'Forms', to: '/registration-form' },
        { name: 'Policy', to: '/privacy-policy' },
    ]
    return (
        <Navbar isBordered animation className="max-w-full" maxWidth="full">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>


            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <Avatar  radius="sm" color="default" src={logo} />
  
                <Link className="font-bold text-inherit text-red-500 cursor-pointer pl-2" href="/">Foodie</Link>
            </NavbarBrand>


            <NavbarContent className="hidden sm:flex gap-4" justify="center" >



                {
                    menuItem.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <Link color="foreground" href={`${item?.to}`} className="cursor-pointer">
                                {item?.name}
                            </Link>
                        </NavbarItem>

                    ))}

            </NavbarContent>


            <NavbarMenu>
                {menuItem.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={`${item?.to}`}
                            size="lg"
                        >
                            {item?.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="danger"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">My Settings</DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
