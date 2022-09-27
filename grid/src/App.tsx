import { useState, useEffect } from 'react'
import UsersGrid from './components/UsersGrid';
import { getUsersList } from './services/getUsersList';
import { UsersList } from './types/types';
export interface AppProps {
  name: string,
  url: string
}
function App(props: AppProps) {
  const [url, setUrl] = useState(props.url);
  const [list, setList] = useState<UsersList>([]);
  useEffect( () => {
    getUsersList(props.url).then( (data) => {
      setList(data)
    });
  }, [url]) 

  


  return (
    <div className=' container'>
      <div className=' grid-cols-5'>
        <div>
          <div className=' container'>
            <UsersGrid list={list} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App
