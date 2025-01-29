"use client";
import React from 'react'


import {
    BellIcon,
    HomeIcon,
    LogOutIcon,
    MenuIcon,
    MoonIcon,
    SunIcon,
    UserIcon,
    MapPinHouseIcon,
    MonitorCogIcon,
    SquareUserIcon,
    HandCoinsIcon,
    UserSearchIcon,
    UserPenIcon,
    KeyRoundIcon,
    UsersIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useAuth, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import SidebarGroup from '../SidebarGroup/SidebarGroup';

function Navbar() {
    const [showMenu, setShowMenu] = useState(true);
    const { isSignedIn } = useAuth();
    const { theme, setTheme } = useTheme();
    return (
        <nav className='sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
            <div className='max-w-7xl mx-auto z-50'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <Link href='/' className='text-xl font-bold text-primary font-mono tracking-wider'>
                            RENTRUST
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="mr-2"
                        >
                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>

                        <Sheet open={showMenu} onOpenChange={setShowMenu}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <MenuIcon className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col space-y-4 mt-6">
                                    <Button variant="ghost" className="flex items-center gap-3 justify-start " asChild>
                                        <Link href="/">
                                            <span className='flex gap-[0.75rem]'>
                                                <HomeIcon className="w-4 h-4" />
                                                Home
                                            </span>
                                        </Link>
                                    </Button>

                                    {isSignedIn ? (
                                        <>
                                            <Button variant="ghost" className="flex items-center gap-3 justify-start className='border-x border-x-gray-400 rounded-md'" asChild>
                                                <Link href="/notifications">
                                                    <span className='flex gap-[0.75rem]'>
                                                        <BellIcon className="w-4 h-4" />
                                                        Notifications
                                                    </span>
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                                <SidebarGroup icon={<MonitorCogIcon className="w-4 h-4" />} text="Properties">
                                                    <Button variant="ghost" className="flex items-center gap-3 justify-start dark:hover:bg-accent hover:bg-gray-300" asChild>
                                                        <Link href="/properties/properties">
                                                            <span className='flex gap-[0.75rem]'>
                                                                <MapPinHouseIcon className="w-4 h-4" />
                                                                Properties
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                    <Button variant="ghost" className="flex items-center gap-3 justify-start dark:hover:bg-accent hover:bg-gray-300" asChild>
                                                        <Link href="/properties/owners">
                                                            <span className='flex gap-[0.75rem]'>
                                                                <HandCoinsIcon className="w-4 h-4" />
                                                                Owners
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                    <Button variant="ghost" className="flex items-center gap-3 justify-start dark:hover:bg-accent hover:bg-gray-300" asChild>
                                                        <Link href="/properties/tenants">
                                                            <span className='flex gap-[0.75rem]'>
                                                                <SquareUserIcon className="w-4 h-4" />
                                                                Tenants
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                </SidebarGroup>
                                            </Button>
                                            <Button variant="ghost" className="" asChild>
                                                <SidebarGroup icon={<UserSearchIcon className="w-4 h-4" />} text="Users">
                                                    <Button variant="ghost" className="flex items-center gap-3 justify-start dark:hover:bg-accent hover:bg-gray-300" asChild>
                                                        <Link href="/users/groups">
                                                            <span className='flex gap-[0.75rem]'>
                                                                <UsersIcon className="w-4 h-4" />
                                                                User Groups
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                    <Button variant="ghost" className="flex items-center gap-3 justify-start dark:hover:bg-accent hover:bg-gray-300" asChild>
                                                        <Link href="/users/users">
                                                            <span className='flex gap-[0.75rem]'>
                                                                <UserPenIcon className="w-4 h-4" />
                                                                Users
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                    <Button variant="ghost" className="flex items-center gap-3 justify-start dark:hover:bg-accent hover:bg-gray-300" asChild>
                                                        <Link href="/users/permissions">
                                                            <span className='flex gap-[0.75rem]'>
                                                                <KeyRoundIcon className="w-4 h-4" />
                                                                Permissions
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                </SidebarGroup>
                                            </Button>
                                            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                                <Link href="/profile">
                                                    <span className='flex gap-[0.75rem]'>
                                                        <UserIcon className="w-4 h-4" />
                                                        Profile
                                                    </span>
                                                </Link>
                                            </Button>
                                            <SignOutButton>
                                                <Button variant="ghost" className="flex items-center gap-3 justify-start w-full">
                                                    <span className='flex gap-[0.75rem]'>
                                                        <LogOutIcon className="w-4 h-4" />
                                                        Logout
                                                    </span>
                                                </Button>
                                            </SignOutButton>
                                        </>
                                    ) : (
                                        <SignInButton mode="modal">
                                            <Button variant="default" className="w-full">
                                                Sign In
                                            </Button>
                                        </SignInButton>
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div >
        </nav >
    )
}

export default Navbar
