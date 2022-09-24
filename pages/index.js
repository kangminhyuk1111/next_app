import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async function getData(){
      const apiGetData = 'https://localhost:3000/api/getdata';
      const response = await fetch(apiGetData);
      const res = await response.json();
      console.log(res);
    }
    getData();
  }, [])
  
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
