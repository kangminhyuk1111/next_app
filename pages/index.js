import Link from 'next/link';
import { useEffect , useState } from 'react';

export default function Home() {
  const inputState = useState({

  })
  useEffect(() => {
    async function getData(){
      const apiGetData = 'https://localhost:3000/api/getdata';
      const response = null;
      const res = null;
      console.log(res);
    }
    getData();
  }, [])
  const inputData = (e) =>{
    
  }  
  return (
    <div className='App'>
      hello world!
      <br/>
      <Link href='/sub'>hi</Link>
      <br/>
      <Link href='/sub/about'>hi2</Link>
      <br/>
      <Link href='/sub/1/rkdglqkr12'>hi3</Link>
      <form>
        <input type='text' placeholder='id' name='id' onChange={inputData}/>
        <input type='password' placeholder='pw' name='pw' onChange={inputData}/>
        <input type='submit' onClick={''}/>
      </form>
    </div>
  )
}
