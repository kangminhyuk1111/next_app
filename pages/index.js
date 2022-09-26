import Link from 'next/link';
import { useEffect , useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [inputState,setInputState] = useState({
    id : '',
    pw : '',
  })
  const getData = () =>{
    const API_KEY = '4r2MSxI1MaeVEVdIYloEsxJZ2vJCQfP7vIxD4hPgXUtbPbmIXylX3KSmBRqxqjfKqgQ24xag4QEY%2F%2FzT2hq82w%3D%3D';
    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0?ServiceKey=${API_KEY}&pageNo=1&?numOfRows=10&dataType=JSON&base_date=20220926&base_time=0900&n=55&ny=127`;
    const response = axios.get(url);
    console.log(response);
  }
  useEffect(() => {
    getData()
  }, [])
  const inputData = (e) =>{
    setInputState({
      ...inputState,
      [e.target.name] : e.target.value
    })
  }

  const returnFnc = () =>{
    return <Link href={`/sub/${inputState.id}/${inputState.pw}`}>href_pgs</Link>
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
        <input type='submit' onClick={returnFnc}/>
      </form>
    </div>
  )
}
