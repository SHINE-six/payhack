'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CustomerHomePage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/customer/dashboard");
    }, [router]);

    return null;
    return null;
}

export default CustomerHomePage;