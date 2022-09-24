import { useRouter } from 'next/router';
import Link from 'next/link'

export default function about() {
    const router = useRouter();
    const links = router.query.id;
    console.log(links);
    return (
        <div>about
            <Link href='/'>back</Link>
        </div>
    )
}
