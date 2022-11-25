import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GoodbyePage() {
    const router = useRouter();
    useEffect(() => {
        const main = async () => {
            if (new URLSearchParams(router.pathname)) {
            }

        };
        main();
    }, [router.pathname]);

    return (
        <div>
            GoodBye
        </div>
    );
}