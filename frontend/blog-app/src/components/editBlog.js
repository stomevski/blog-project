import { useState } from 'react';
import '../styles/addBlog.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Validate from '../Validation/Validation';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const EditBlog = (props) => {

    const [sent, setSent] = useState(false);
    const history = useHistory();
    const [dataState, setDataState] = useState('Editing Blog...');
    const editBlogValues = props.history.location.state.data ;

    const sendBlog = (obj) => {
        
        setSent(true);

        axios.post(`http://localhost:4000/edit/${editBlogValues._id}`, {
            title: obj.title,
            snippet: obj.snippet,
            text: obj.text
        })
            .then((data) => {

                console.log('Data has been send' + data);

                history.push('/');

            }).catch((err) => {

                console.log(err);
                setDataState(err.message);
            })

    }

    



    return (

        <Formik
            initialValues={{

                title: editBlogValues.title,
                snippet: editBlogValues.snippet,
                text: editBlogValues.text
            }}

            onSubmit={(data) => {
                sendBlog(data);
            }}

            

            validationSchema={Validate}

        >

            {(prop) => (<main >
                <Form >
                    <label htmlFor='title'><h3 className='add-blog-label-title'>Title</h3></label>
                    <Field className='add-blog-input-title' type='text' id='title' name='title' value={prop.values.title} onChange={prop.handleChange('title')} />
                    <ErrorMessage
                    name='title'
                    component='div'
                    className='add-blog-error-handler'
                    />
                    <label htmlFor='snippet'><h3 className='add-blog-label-snippet'>Snippet</h3></label>
                    <Field className='add-blog-input-snippet' type='text' id='snippet' name='snippet' value={prop.values.snippet} onChange={prop.handleChange('snippet')} />
                    <ErrorMessage
                    name='snippet'
                    component='div'
                    className='add-blog-error-handler'
                    />
                    <label htmlFor='text'><h3 className='add-blog-label-text'>Text</h3></label>
                    <textarea className='add-blog-input-text' type='text' id='text' name='text' value={prop.values.text} onChange={prop.handleChange('text')} />
                    <ErrorMessage
                    name='text'
                    component='div'
                    className='add-blog-error-handler'
                    />
                    {sent ? <h3 className='add-blog-message-sent'>{dataState}</h3> : <button className='add-blog-button' type='submit'>Edit Blog</button>}
                </Form>
            </main>


        )}

        </Formik>  
    )
}


export default EditBlog;