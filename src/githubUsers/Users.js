import React from 'react'
import UserItem from './UserItem'
import { useSelector } from 'react-redux'
import Spinner from '../components/spinner.gif'
// import { noUser } from '../store/github/gitSlice'

const Users = () => {
  const gitSlice = useSelector((state) => state.git)



  if (gitSlice.loading === true){
    return <img src={Spinner} alt="loading..."  style={{ width: '30rem' , margin: 'auto', display: 'block'}}/>
  }

  // if (gitSlice.noUserFound) {
  //   return <h1 className='text-center'>The user not is registered in <i className='fab fa-github'/> github.</h1>
  // }

  return (
    <div style={styleUser} >
      {gitSlice.users.map(user => (
        <UserItem user={user} key={user.id}/>
      ))}
    </div>
  )
}

const styleUser = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 'irem',
}



export default Users















