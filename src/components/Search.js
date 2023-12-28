import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGitThunk } from '../store/github/gitThunk'
import { clearUsers, setAlert } from '../store/github/gitSlice'


export const Search = ({type}) => {
  const text = useRef('')
  const dispatch = useDispatch()

  const users = useSelector((state) => state.git.users)


  // const onChange = (e) => {
  //   e.preventDefault()
  //   console.log(text.current.value);
  //   dispatch(fetchGitThunk(text.current.value.toLowerCase()))
  // }
  const onSubmit = (e) => {
    e.preventDefault()
    
    if (text.current.value === '') {
      dispatch(setAlert({msg:'Please add Something', type:'light'}))
    } else {
      console.log(text.current.value);
      dispatch(fetchGitThunk(text.current.value.toLowerCase()))
    }
  }



  const onClick = () => {
    dispatch(clearUsers())
    text.current.value = ''
  }





  return (
    <div className='container' >
      <form className='form' onSubmit={onSubmit}>
        <input type="text" ref={text} placeholder='Search...'/>
        {users.length > 0 && <button className='btn btn-block btn-dark' onClick={onClick}>Clear</button>}
        <input type="submit" value="Search" className='btn btn-block btn-me'/>
        {users.length > 0 ? <h2 className='badge-me  text-center'> <i className='fab fa-github'/> Github User's with the name {text.current.value}</h2> :
        <h2 className='badge-alt'>
          <i className='fab fa-github'/> {''}Enter a name to find user's.</h2>}
      </form>
    </div>
  )
}
