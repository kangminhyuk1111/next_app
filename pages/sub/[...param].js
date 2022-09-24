import { useRouter } from 'next/router'
import Link from 'next/link'    
import React from 'react'

export default function links() {
    const router = useRouter();
    const id = router.query.param[0];
    const name = router.query.param[1];
    console.log(router.query);
  return (
    <div>
        hello {id} {name}
        <Link href='/'>back</Link>
    </div>
  )
}
