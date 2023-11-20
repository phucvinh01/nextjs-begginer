'use client';

import Link from 'next/link';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR  , { Fetcher}from 'swr';
const BlogDetail = ({ params }: { params: { id: number } }) => {

  const fetcher : Fetcher<Iblog, string>  = (url: string) => fetch(url).then((r) => r.json());

 const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
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
      <Link
        href={'/Blog'}
        className='btn btn-dark'>
        Back
      </Link>
      <div className='d-flex justify-content-center'>
        <Card>
          <Card.Header>{data?.title}</Card.Header>
          <Card.Body>
            <Card.Text>{data?.content}</Card.Text>
          </Card.Body>
          <Card.Footer>{data?.author}</Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default BlogDetail;
