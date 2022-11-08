import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileApi } from '../../redux/reducers/useReducer';

type Props = {}

export default function Profile({}: Props) {
    const  {userLogin} = useSelector((state:any) => state.userReduce);
    console.log('user',userLogin)
    const dispatch = useDispatch();
    
    useEffect(() => {
        const action = getProfileApi();
        // dispatch(action)
    },[])
  return (
    <div>Profile</div>
  )
}