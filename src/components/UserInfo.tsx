import { useAtom } from "jotai";
import { loadableUserAtom } from '../atoms.tsx';
import Navbar from './Navbar.tsx';
import '../App.css';
 

const UserInfo = () =>  {
  const [ user ] = useAtom(loadableUserAtom);

  if (user.state === "hasError" ) return <h1> Error Occured</h1>;
  if (user.state === "loading") return <h1>Loading</h1>;

   
  return (
    <>
      <Navbar/>
      <h1>UserInfo</h1>
      <p> Name: {user.data.name}</p>
      <p> Email: {user.data.email}</p>
    </>
  )
}

export default UserInfo;
