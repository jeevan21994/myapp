

  import React, { useState ,useEffect } from 'react'
  import * as commonService from '../utils/CommonService.js';
  import Loader from '../Loader/Spinner';
  const AddUser = props => {
  //  var ele= document.getElementsByClassName('spinner-border').style.display="none";
    
  const initialFormState = { id: null, name: '', email: '', phone:'',address:'',image:''}
  const [user, setUsers] = useState(initialFormState)
  const [loading , setLoading]=useState(false)
  const [image, setImage] = useState({ preview: "", raw: "" });
  useEffect(()=>{
  })
  const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };
   
    const handleUpload = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image.raw);
      setImage(
        {
        initialFormState:{
        image:image.raw.name,
        },
          image:image.raw.name,
      })
    }
  
  const handleInputChange = event => {
      const { name, value } = event.target
      setUsers({ ...user, [name]: value })
  }

  const showLoader = () => {
    setLoading({ loading: true });
  }

  const hideLoader = () => {
    setLoading({ loading: false });
  }

  const onSubmit=event => {
    event.preventDefault()
      setTimeout(() => {
        commonService.forSuccess('add user successfully','Success')
        props.addUser(user)
        setUsers(
          initialFormState
          )
          hideLoader();
    setLoading({ loading: false });

    }, 2000);
    showLoader();
  }

  console.log(image)
  return (
    <div className="container-fluid">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
            Add User
          </button>
        <form>
        <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">User Form</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          <div className="modal-body">
          <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" 
          name="name"  value={user.name} 
          onChange={handleInputChange}/>
          </div>

          <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="text" className="form-control" id="email"
            name="email"  value={user.email} 
            onChange={handleInputChange}/>
          </div>

          <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="number" className="form-control" id="phone"
            name="phone"  value={user.phone} 
            onChange={handleInputChange} />
          </div>

          <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" className="form-control" id="address"
            name="address"  value={user.address} 
            onChange={handleInputChange}/>
          </div>
        
          <div className="form-group">
          <label htmlFor="upload-button">Profile Upload
            {image.preview ? <img src={image.preview}  height="250" width="250" alt="" /> : (
              <>
              <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
              </span>
              <h5>Upload your photo</h5>
              </>
            )}
          </label>
          <input type="file" id="upload-button" value={user.image} style={{ display: 'none' }} onChange={handleChange} />
          <br />
          <button className="btn btn-success" onClick={handleUpload}>Upload</button> 
          </div>
          </div>
          
          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
          <button type="submit" className="btn btn-primary" onClick={onSubmit}  data-dismiss="modal">Submit</button>
          </div>
        </div>

      </div>
    </div>

        </form>

        {(loading) ? <Loader /> : null}
    </div>
  )
}

export default AddUser


 // localStorage.setItem('currentUser', JSON.stringify(item));
    // this.obj =JSON.parse(localStorage.getItem('currentUser'));
    // let item =image.raw.name
    // localStorage.setItem('imagePath',JSON.stringify(item))

/* <label htmlFor="image">Image:</label>
<input type="file" className="form-control" 
  name="image"  value={user.image} 
  onChange={handleInputChange}/> */
  // if (!user.name || !user.email || !user.phone || !user.address) return
  // const [image, setImage] = useState({ preview: "", raw: "" });

  // const handleChange = e => {
    //   if (e.target.files.length) {
    //     setImage({
    //       preview: URL.createObjectURL(e.target.files[0]),
    //       raw: e.target.files[0]
    //     });
    //   }
    // };

  //   const handleUpload = async e => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", image.raw);
  //     console.log(image.raw)
  //     await fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       },
  //       body: formData
  //     });
  //   };










  /* <button variant="primary" onClick={handleShow}>
          Launch demo modal
        </button>
        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
            // {/* <ModalTitle>Modal heading</ModalTitle> }
          </ModalHeader>
          <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </ModalFooter>
        </Modal> */
















        // const [getRootProps, getInputProps] = useState({ 
        //   accept:'image/*',
        //   onDrop:(acceptedFiles)=>{
        //     setProfileimgae(
        //      acceptedFiles.map((file)=>
        //      Object.assign(file,{
        //        preview:URL.createObjectURL(file),
        //      }),
        //      ),
        //     );
        //   },
        //  });
   
        //  const getBase64 =(file)=>{
        //    const reader = new FileReader();
        //    reader.readAsDataURL(file);
        //    reader.onload = function(){
        //      //base64
        //      console.log(reader.result)
        //    }
        //  }
   
        //  const handleUpload =()=>{
        //    if(profileimage.length>0){
        //      getBase64(profImage);
        //    }
        //  }








  // await fetch("YOUR_URL", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   },
      //   body: formData
      // });

  // export default function App() {
  //   const [image, setImage] = useState({ preview: "", raw: "" });

  //   const handleChange = e => {
  //     if (e.target.files.length) {
  //       setImage({
  //         preview: URL.createObjectURL(e.target.files[0]),
  //         raw: e.target.files[0]
  //       });
  //     }
  //   };

  //   const handleUpload = async e => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("image", image.raw);

  //     await fetch("YOUR_URL", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       },
  //       body: formData
  //     });
  //   };

  //   return (
  //     <div>
  //       <label htmlFor="upload-button">
  //         {image.preview ? (
  //           <img src={image.preview} alt="dummy" width="300" height="300" />
  //         ) : (
  //           <>
  //             <span className="fa-stack fa-2x mt-3 mb-2">
  //               <i className="fas fa-circle fa-stack-2x" />
  //               <i className="fas fa-store fa-stack-1x fa-inverse" />
  //             </span>
  //             <h5 className="text-center">Upload your photo</h5>
  //           </>
  //         )}
  //       </label>

  //       <input
  //         type="file"
  //         id="upload-button"
  //         style={{ display: "none" }}
  //         onChange={handleChange}
  //       />
  //       <br />
  //       <button onClick={handleUpload}>Upload</button>
  //     </div>
  //   );
  // }















































































































































  // import React ,{useState} from 'react'
  // import global from '../Api/Config'
  // import axios from 'axios';
  // import { useHistory } from 'react-router-dom';

  // const AddUser = () => {
  //   const history=useHistory()
  //   const url = global.baseUrl
  //   const initialState={
  //     name:"",
  //     email:"",
  //     phone:"",
  //     address:""
  // }

  // // const history =useHistory()
  //     const [user, setUser] = useState(initialState)
  //     const {name,email,phone,address}=user;

  //     const onInputChange=e=>{
  //         setUser({...user,[e.target.name]:e.target.value})
  //     }

  //     const onSubmit=async event => {
  //       event.preventDefault() //form empty not submit
  //       // console.log(user)
  //       await axios.post(url + "users",user);
  //       history.push("/");
  //     }

  //     return (
  // <div className="container-fluid">
  //   <button type="button" className="right-btn mt-2 mb-2 btn btn-primary" data-toggle="modal" data-target="#myModal">
  //     User Add Form
  //   </button>
      
  //   {/* <!-- The Modal --> */}
  //   <div className="modal fade" id="myModal">
  //     <div className="modal-dialog modal-dialog-centered">

  //       <div className="modal-content">
        
  //         {/* <!-- Modal Header --> */}
  //         <div className="modal-header">
  //           <h4 className="modal-title">User Form</h4>
  //           <button type="button" className="close" data-dismiss="modal">&times;</button>
  //         </div>
  //       <form>
          
  //         {/* <!-- Modal body --> */}
  //         <div className="modal-body">

  //         <div className="form-group">
  //          <label htmlFor="name">Name:</label>
  //          <input type="text" className="form-control" id="name" 
  //          name="name"  value={name} 
  //          onChange={e=>onInputChange(e)}/>
  //          </div>

  //         <div className="form-group">
  //          <label htmlFor="email">Email address:</label>
  //          <input type="text" className="form-control" id="email"
  //           name="email"  value={email} 
  //           onChange={e=>onInputChange(e)}/>
  //          </div>

  //          <div className="form-group">
  //          <label htmlFor="phone">Phone Number:</label>
  //          <input type="number" className="form-control" id="phone"
  //           name="phone"  value={phone} 
  //           onChange={e=>onInputChange(e)} />
  //          </div>

  //          <div className="form-group">
  //          <label htmlFor="address">Address:</label>
  //          <input type="text" className="form-control" id="address"
  //           name="address"  value={address} 
  //           onChange={e=>onInputChange(e)} />
  //         </div>
        
  //         <div className="form-group">
  //          <label htmlFor="profile">Profile Upload:</label>
  //          <input type="file" className="form-control" id="profile" name="profile" />
  //         </div>
  //         {/* <button type="submit" className="btn btn-default">Submit</button> */}

  //         </div>
  //       </form>
          
  //         {/* <!-- Modal footer --> */}
  //         <div className="modal-footer">
  //           <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={onSubmit}>Submit</button>
  //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

  //         </div>
          
  //       </div>

  //     </div>
  //   </div>
    
  // </div>
  //     )
  // }

  // export default AddUser;


















  // const testList = [
  //   {
  //     id: 1,
  //     title: 'Success',
  //     description: 'This is a success toast component',
  //     backgroundColor: '#5cb85c',
  //     // icon: checkIcon
  //   },
  //   {
  //     id: 2,
  //     title: 'Danger',
  //     description: 'This is an error toast component',
  //     backgroundColor: '#d9534f',
  //     // icon: errorIcon
  //   },
  // ];
