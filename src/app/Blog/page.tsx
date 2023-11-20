'use client';
import React from 'react'
import ModalAddNew from '@/src/components/modal.create';
import AppTable from '@/src/components/app.table'
import useSWR from 'swr';
const Blog = () => {
    
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error, isLoading } = useSWR(
    'http://localhost:8000/blogs',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loadingg</div>;
  }
  return (
   <>
   <h1 className="mb-4 mt-3">Blogs Listing</h1>
      <div className="d-flex justify-content-end mb-3">
        <ModalAddNew />
      </div>
     <AppTable blogs={data?.sort((a:any , b: any) => b.id - a.id) }/>
   </>
  )
}

export default Blog