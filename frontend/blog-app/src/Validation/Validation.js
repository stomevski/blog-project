import * as yup from 'yup';




const Validate = yup.object({

    title : yup.string().required('Enter Title'),
    snippet : yup.string().required('Enter Snippet'),
    text : yup.string().required('Enter Text').min(20,'Text should be minimum 20 characters').max(400, 'Text too long. Max characters allowed is 400') 
})





export default Validate ;