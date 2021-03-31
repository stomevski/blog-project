import {useEffect,useState} from 'react';
import axios from 'axios';
import '../styles/homeBlogs.css';
import { Link } from 'react-router-dom';


const HomeBlogs = () => {
   
const [blogs, setBlogs] = useState([]);
const [isit, setIsit] =useState(false);
const [dataState, setDataState] = useState('Loading...')


useEffect(()=>{

  
axios.get('http://localhost:4000').then((res) => {


setBlogs(res.data);

if(res.data.length === 0){
setIsit(true);
}

}).catch((err) => {
setIsit(true);
console.log(err);
setDataState(err.message);

});


    

    


},[]);


return (
    <div>
    <h1 className='main-header'>Select Blog</h1>
    {blogs.length ? blogs.map((blogList) => {
        let id = blogList._id;
        return(
        <main key={id} className='main-block'>
        <Link to={`/blog/${id}`} className='main-blog-link'>
        <h1 className='main-title'>{blogList.title}</h1>
        <h3 className='main-snippet'>{blogList.snippet}</h3></Link>
        </main>
        )
    }) : isit ? <h2 className='main-empty-blog'>Blog List is empty</h2> : <h2 className='main-loading'>{dataState}</h2>}
    </div>
);


}


export default HomeBlogs;