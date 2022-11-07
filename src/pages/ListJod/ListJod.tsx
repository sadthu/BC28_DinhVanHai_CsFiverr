import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/configStore'
import { getJodApi } from '../../redux/reducers/ListjodReducer';

type Props = {}

export default function ListJod({ }: Props) {

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
      <h3>
        
      </h3>
    </div>
  )
}