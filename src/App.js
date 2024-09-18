import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbar';
import { Courses } from './components/Courses';
import { Tutorials } from './components/Tutorials';
import { LiveStreams } from './components/LiveStreams';
import { Detail } from './components/Detail';
import { Error } from './components/Error';
import { Home } from './components/Home';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
// import { useParams } from 'react-router-dom'

// const Search = (props) => {
//   const { no } = useParams();
//   return <div>{no}</div>
// }
function App() {

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => console.log(res.data.products[0]))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/courses' element={<Courses />} />
          <Route path='tutorials' element={<Tutorials />} />
          <Route path='livestreams' element={<LiveStreams />} />
          <Route path='detail' element={
            <RequireAuth>
              <Detail></Detail>
            </RequireAuth>} />
          <Route path='/login' element={<Login />} />

          <Route path='*' element={<Error />} />
          {/* <Route path=':no' element={<Search />} /> */}

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
