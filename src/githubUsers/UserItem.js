import React from 'react'
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user}) => {



  return (
    <div className='card text-center'>
      <img src={user.avatar_url} className='round-img' style={imgStyle}  alt='github'/>
      <h4>{user.login}</h4>
      <div>
        <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">More info</Link>
      </div>
    </div>
  )
}
const imgStyle = {
    width: '60px'
}

UserItem.protoTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
