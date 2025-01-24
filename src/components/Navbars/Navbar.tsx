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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useAuth, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
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
                                    <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                        <Link href="/">
                                            <HomeIcon className="w-4 h-4" />
                                            Home
                                        </Link>
                                    </Button>

                                    {isSignedIn ? (
                                        <>
                                            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                                <Link href="/notifications">
                                                    <BellIcon className="w-4 h-4" />
                                                    Notifications
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                                <Link href="/profile">
                                                    <UserIcon className="w-4 h-4" />
                                                    Profile
                                                </Link>
                                            </Button>
                                            <SignOutButton>
                                                <Button variant="ghost" className="flex items-center gap-3 justify-start w-full">
                                                    <LogOutIcon className="w-4 h-4" />
                                                    Logout
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
            </div>
        </nav>
    )
}

export default Navbar
