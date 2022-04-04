import ListItem from './ListItem/ListItem.js'
import React, { useState } from 'react';
import './index.scss'

const List = ({ list }) => {
  return (
    <div className='list-wrap'>
      {list.map(item => <ListItem key={item.id} item={item} />)}
    </div>
  )
}

export default List