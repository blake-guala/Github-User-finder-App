import React, { Fragment, useEffect } from 'react'
import Spinner from '../components/spinner.gif'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGitThunkUser , fetchGitThunkRepos} from '../store/github/gitThunk'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Repos } from './Repos'

export const User = () => {
    const gitSlice = useSelector((state) => state.git)
    const user = useSelector((state) => state.git.user)
    const repos = useSelector((state) => state.git.repos)

    const dispatch = useDispatch()
    const { login } = useParams()

    useEffect(() => {
      dispatch(fetchGitThunkUser(login))
      dispatch(fetchGitThunkRepos(login))

    // eslint-disable-next-line
    },[])
    
    if (gitSlice.loading === true) {
        return <img src={Spinner} alt="loading..."  style={{ width: '30rem' , margin: 'auto', display: 'block', backgroundColor: 'black'}}/>
    }
  return (
    <div className='container'>
        <Link to='/' className='btn btn-light'><i className='fab fa-github'/> Search page</Link>
        Hireable: {user.hireable ? <i className='fas fa-check text text-success'/> : <i className='fas fa-times-circle text-danger'/>}
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={user.avatar_url} alt="user's avatar" className='round-img' style={{width: '9rem'}}/>
            <h3>{user.name}</h3>
            <h5>Location: {user.location}</h5>
          </div>
          <div>
          {user.bio && <Fragment>
            <h3 className='badge'>Bio</h3>
            <h4>{user.bio}</h4>
          </Fragment>}
          <a href={user.html_url} className='btn btn-dark my-1'>Visit Github page</a>
          <ul>
            <li className='badge-b'>Username: {user.login}</li>
            {user.company && <li className='badge-b' >Company: {user.company}</li>}
            {user.blog && <li className='badge-b'>Website: {user.blog && user.blog}</li>}
          </ul>
        </div>
        </div>
        <div className="card text-center">
          <div className="badge-primary badge">Followers: {user.followers}</div>
          <div className="badge-success badge">Following: {user.following}</div>
          <div className="badge-light badge">Public Repos: {user.public_repos}</div>
          <div className="badge-dark badge">Public Gists: {user.public_gists}</div>
        </div>
          <Repos repos={repos}/>
    </div>
  )
}

