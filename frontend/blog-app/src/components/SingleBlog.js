import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../styles/singleBlog.css';
import {isEmpty} from "lodash";
import {useHistory} from "react-router-dom";




const SingleBlog = () => {

const history = useHistory();
const [blog,setBlog] = useState({});
const [dataState, setDataState] = useState('Loading...')
  
let {id} = useParams();

useEffect(()=>{

axios.get(`http://localhost:4000/blog/${id}`).then((res) => {

setBlog(res.data);


}).catch((err) => {
console.log(err);
setDataState(err.message);
});


},[id]);


const removeBlog = () => {

axios.delete(`http://localhost:4000/remove/${id}`).then((data)=>{
    console.log(data);
    history.push('/');
}).catch((err)=>{
    console.log(err);
})

}


return(

   <div>
   {isEmpty(blog) ? <h1 className='single-blog-loading'>{dataState}</h1> : 
    <main className='main-single-blog'>
    <h1 className='single-blog-title'>{blog.title}</h1>
    <h3 className='single-blog-snippet'>{blog.snippet}</h3>
    <p className='single-blog-text'>{blog.text}</p>
    <img onClick={removeBlog} className='single-blog-delete' src='/assets/delete.png' alt='Delete Icon'/>
   </main>}
   </div>
    

);



}



export default SingleBlog;