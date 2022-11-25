import { useRouter } from "next/router";

export default function GeniusSetTestPage() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="">
            <div className="">
                {id} test
            </div>
        </div>
    );
}