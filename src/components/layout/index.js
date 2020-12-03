import React from 'react'
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';

 function index() {
  return (
     <React.Fragment>
       <Search />
       <Tracks />
     </React.Fragment>
  )
}

export default index;