import React from 'react'
import RepoItem from './ReposItem'
import PropTypes from 'prop-types'

export const Repos = ({repos}) => {
 

  return (
    <div>
        {repos.map(repo => (
            <RepoItem repo={repo} key={repo.id}/>
        ))}
    </div>
  )
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired
}
