import './App.css'
import { ResourseLoader } from './components/resourse-loader'
import { UserInfo } from './components/user-info'
import { DuckInfo } from './components/duck-info'

function App() {

  return (
    <>
      <ResourseLoader resourceUrl={"https://api.escuelajs.co/api/v1/users/2"} resourceName='user'>
        <UserInfo/>
      </ResourseLoader>

      <ResourseLoader resourceUrl={"https://random-d.uk/api/random"} resourceName='duck'>
        <DuckInfo />
      </ResourseLoader>
    </>
  )
}

export default App
