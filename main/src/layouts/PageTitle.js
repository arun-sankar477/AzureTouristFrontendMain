import { Typography } from '@mui/material';
import React from 'react';
// import Typography from '@mui/material/Typography';


const PageTitle = (heading) => {
  // heading=false;
  return (
    <div>
        <Typography variant='h4' >{heading.name}</Typography>
       {/* <Typography variant='h4'>{secondHeading.name1}</Typography> */}
      
    </div>
  )
}

export default PageTitle
