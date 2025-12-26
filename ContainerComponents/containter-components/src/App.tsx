import './App.css'
// import { ResourseLoader } from './components/resourse-loader'
import { UserInfo } from './components/user-info'
import { ImageInfo } from './components/image-info'
import { DataSource } from './components/data-source'
import axios from "axios";
import { DataSourceRender } from './components/data-source-render';

const getDataFromServer = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
}

const getDataFromLocalStorage = (key: string) => async () => {
  return localStorage.getItem(key);
}

const Message = ({ msj }: { msj: string }) => <h1>{msj}</h1>

function App() {

  return (
    <>
      {/* primera version */}
      {/* <ResourseLoader resourceUrl={"https://api.escuelajs.co/api/v1/users/2"} resourceName='user'>
        <UserInfo/>
      </ResourseLoader>

      <ResourseLoader resourceUrl={"https://random-d.uk/api/random"} resourceName='duck'>
        <DuckInfo />
      </ResourseLoader> */}

      {/* segunda version */}
      <DataSource
        getData={() => getDataFromServer("https://api.escuelajs.co/api/v1/users/2")}
        resourceName='user'
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getData={() => getDataFromServer("https://picsum.photos/v2/list?page=1&limit=1")}
        resourceName='image'
      >
        <ImageInfo />
      </DataSource>

      {/* tercera version */}
      <DataSourceRender
        getData={() => getDataFromServer("https://api.escuelajs.co/api/v1/users/1")}
        render={(resource) => <UserInfo user={resource} />} >
      </DataSourceRender>

      {/* Local storage: */}
      <DataSource 
        getData={getDataFromLocalStorage("impersonate")}
        resourceName='msj'
      >
        <Message msj="Default Message" />
      </DataSource>
    </>
  )
}

export default App
