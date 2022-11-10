import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getJodApi } from '../../redux/reducers/ListjodReducer';

type Props = {  
}

export default function ListJod({ }: Props) {
  const [listJod, setListJod] = useState([])
  const { arrJod } = useSelector((state: RootState) => state.listjodreduces);
  console.log({ arrJod })
  const dispatch: AppDispatch = useDispatch()
  useEffect(() => {
    //Gọi api
    const action = getJodApi();
    dispatch(action);
  }, [])
  return (
    <div>
      <div className='container listjod'>
        
      </div>
    </div>
  )
}