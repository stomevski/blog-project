import AddBlog from './components/AddBlog';
import {Switch,Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeBlogs from './components/HomeBlogs';
import SingleBlog from './components/SingleBlog';
import editBlog from './components/editBlog';


function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={HomeBlogs} />
    <Route exact path='/editBlog' component={editBlog} />
    <Route exact path='/addBlog'>
    <AddBlog/>
    </Route>
    <Route exact path='/blog/:id'>
    <SingleBlog/>
    </Route>
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
