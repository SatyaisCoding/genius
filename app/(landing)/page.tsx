import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';


function LandingPage() {
    return (
        <div>
            <div>
                Landing Page (Unprotected)
            </div>

            <Link href="/sign-in">
                <Button>
                    Login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button>
                    Register
                </Button>
            </Link>
        </div>
    )
}

export default LandingPage;
