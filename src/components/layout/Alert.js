import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAlert } from '../../store/github/gitSlice'


export const Alert = () => {
    let alert = useSelector((state) => state.git.alert)
    const dispatch = useDispatch()
    if (alert !== null) {
        setTimeout(() => {
            dispatch(removeAlert())
        }, 2000);
    }



    return (
        <div className='container'>
            {alert !== null && (<div className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle text-danger'></i> {alert.msg}
            </div>)}
        </div>
    )
}
