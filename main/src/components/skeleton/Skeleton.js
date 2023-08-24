//Particularly for Inbox and Sentbox
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
// import PageTitle from '../../layouts/PageTitle';
import { Card, CardContent } from '@mui/material';

// import VirtualizedTable from '../../components/table/VirtualizedTable';
export default function SkeletonForInboxSentbox() {
  return (
    <>
        <Skeleton variant="rectangular" width={'100%'} height={400} />
    </>
  );
}