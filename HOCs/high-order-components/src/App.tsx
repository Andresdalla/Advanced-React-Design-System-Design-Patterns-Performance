import './App.css'
import { logProps } from './components/log-props'
import { UserInfo } from './components/user-info'
import { includeUser } from './components/include-user';

const UserInfoWrapper = logProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "1");
function App() {
  return (
    <>
      <UserInfoWrapper test={"Andres"} b="aaasas" c="12"/>
      
      <UserInfoWithLoader/>
    </>  
  )
}

export default App