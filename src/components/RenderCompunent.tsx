import { useSearchParams } from 'react-router-dom';
import React from 'react'
import NameDetailJod from './NameDetailJod';
import NameJod from './NameJod';

type Props = {Component: React.FC}

export default function RenderCompunent({Component}: Props) {
    const [searchParam,setsearchParams] = useSearchParams()
    if( searchParam.get('key') !== null) {
        Component = NameDetailJod
    }
  return (
    <div>
        <Component/>
    </div>
  )
}