'use client';
import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ModalUpdate from './modal.update';
import Link from 'next/link';

interface IProps {
  blogs: Iblog[];
}

const AppTable = (props: IProps) => {
  const { blogs } = props;



  return (
    <Table
      striped
      bordered
      hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((item) => {
          return (
            <>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}k</td>
                <td>{item.content}</td>
                <td>
                  <Stack direction='horizontal'>
                    <Link className='btn btn-primary' href={`/Blog/${item.id}`}>View</Link>
                   <ModalUpdate blog={item}/>
                    <Button variant='danger'key={3}>Delete</Button>
                  </Stack>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AppTable;
