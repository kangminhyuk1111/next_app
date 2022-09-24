import Link from 'next/link';

export default function Home() {
  return (
    <div className='App'>
      hello world!
      <br/>
      <Link href='/sub'>hi</Link>
      <br/>
      <Link href='/sub/about'>hi2</Link>
      <br/>
      <Link href='/sub/1/rkdglqkr12'>hi3</Link>
    </div>
  )
}
