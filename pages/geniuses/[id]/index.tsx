import { useRouter } from "next/router"

export default function GeniusesPage() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className="">
            <div className="">
                {id}
            </div>
        </div>
    )
}