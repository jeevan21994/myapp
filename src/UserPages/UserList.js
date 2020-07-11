
import React,{useState} from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import image from '../Assets/download2.jpg'
const UserList = (props) => {
  const UsersArr =props.users
  console.log(UsersArr,props)
  console.log(props)

  
  const [columns] = useState([ 
    {
      Header: "Image",
      Cell: row => (
<div>
  
   {/* <img className="img-responsive" src={row.original.image} /> */}
   <img className="img-responsive" src={image}  alt="" width="30px" height="30px"/>

</div>
)

},
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Email",
      accessor: "email"
    },
    {
      Header: "Phone",
      accessor: "phone"
    },
    {
      Header: "Address",
      accessor: "address"
    },
    {
      Header: 'Action',
      
      Cell: row => (
        <div>
          <button onClick={() => { props.editUser(row.original) }} className="btn btn-warning mr-2">Edit</button>
         <button onClick={() => props.deleteUser(row.original.id)} className="btn btn-danger">Delete</button>
        </div>
    )

  }
]);



return (
  <div>
      {/* <h4><img src={imageUrlName}/></h4> */}
       <ReactTable
           data={UsersArr}
           columns={columns}
           className="-striped -highlight"
           defaultPageSize = {5}  
           pageSizeOptions = {[5,10, 20,50]} 
           />
    </div>
  )
}

export default UserList



//  const [image, setImage] = useState();
  // console.log(image)
  // var imageUrlName;
  // imageUrlName = JSON.parse(localStorage.getItem('imagePath'))
  // console.log(imageUrlName)
  // const [imgName,setImgName] =useState(imageUrlName)
  // console.log(imgName)

/* <div className="table-responsive">
<table className="table">
<thead>
<tr>
  <th>Image</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Address</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{props.documents.length > 0 ? (
props.documents.map(item => (
<tr key={item.id}>
<td>{item.image}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>{item.address}</td>

<td>
<button onClick={() => { props.editUser(item) }} className="btn btn-warning mr-2">Edit</button>
<button onClick={() => props.deleteUser(item.id)} className="btn btn-danger">Delete</button>
</td>
</tr>
))
) : (
<tr>
<td colSpan={4}>No any Record available</td>
</tr>
)}
 
</tbody>
</table>
</div>
) */








// import React,{ useState,useEffect } from 'react'
// import ReactTable from 'react-table-6'
// import 'react-table-6/react-table.css'
// import AddUser from './AddUser'
// import axios from 'axios'
// import global from '../Api/Config'

// export const UserList = () => {
//   const url =global.baseUrl
//  const [users , setUsers] = useState([])

//  useEffect(()=>{
//   axios
//   .get(url+'users')
 
//   .then((response) => {
//     const data = response.data.map(item => 
//       ({ 
//         id: item.id, 
//         name: item.name, 
//         email:item.email,
//         phone:item.phone,
//         address:item.address
//       })
//     )
//     setUsers(data)
//   })
//   .catch((error) => {
//     console.log(error);
//   })
  
//  })


//  const handleEdit=()=>{
//   console.log(users)
//  }
//  const handleDelete=()=>{

//  }
//   const columns = [{
//     Header: 'Name',
//     accessor: 'name' 
//   },
//    {
//     Header: 'Email',
//     accessor: 'email',
//   }, 
//   {
//     Header: 'Phone',
//     accessor: 'phone' 
//   },
//    {
//     Header: 'Address',
//     accessor: 'address',
//   },
//   {
//     Header: 'Action',
//     Cell: row => (
//       <div>
//           <button className="btn btn-warning mr-2" onClick={() => handleEdit()}>Edit</button>
//           <button className="btn btn-danger" onClick={() => handleDelete()}>Delete</button>
//       </div>
//   )
//   }
// ]
 
//   return( 
//     <div className="container-fluid">
//       <div className="row">
//        <AddUser/>
//       </div>
//       <div className="">
//        <ReactTable
//            data={users}
//            columns={columns}
//            className="-striped -highlight"
//            defaultPageSize = {10}  
//            pageSizeOptions = {[5,10, 20,50]} 
//         />
//  </div>

//   </div>
//   )
// }


/*
   const getUserList =async ()=>{
  const item = await axios.get(url+'users')
  setUsers(item.data)
 }
*/