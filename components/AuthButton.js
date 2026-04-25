'use client';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { AuthModal } from "./AuthModal";
import { LogOut } from "lucide-react";
import { signOut } from "@/app/actions";
const AuthButton = ({ user }) => {
    const [authModal, setAuthModal] = useState(false);

    if (user) {
        return (
            <form action={signOut}>
                <Button

                    variant="ghost"
                    size="sm"
                    type="submit"
                    className="gap-2"
                >
                    <LogOut className="w-4 h-4" />
                    Sign out
                </Button>

            </form>
        )
    }
    return (
        <div>
            <Button
                onClick={() => setAuthModal(true)}
                variant="default"
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 gap-2"
            >
                <LogIn className="w-4 h-4" />
                Sign in
            </Button>

            <AuthModal
                isOpen={authModal}
                onClose={() => setAuthModal(false)}
            />
        </div>
    );
};

export default AuthButton;