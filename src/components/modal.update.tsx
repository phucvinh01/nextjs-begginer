'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { mutate } from 'swr';

interface IProps {
    blog: Iblog
}

const ModalUpdate = (props : IProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [id, setId] = useState<number>(0)
  const [stateBlog, setStateBlog] = useState<Iblog | null>(null)

  const {blog} = props

  useEffect(() => {
    if (!show) {
      setAuthor('');
      setTitle('');
      setContent('');
    }
    else {
        setStateBlog(blog)
        setAuthor(blog.author);
        setTitle(blog.title);
        setId(blog.id)
        setContent(blog.content);
    }
  }, [show]);
  const handleSave = async () => {
    const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, content }),
    });
    const res = await rawResponse.json();
    if (res) {
      alert('created ~');
      handleClose();
      mutate('http://localhost:8000/blogs');
    } else {
      alert('failed...');
    }
  };

  return (
    <>
      <>
        <Button
          variant='warning'
          onClick={handleShow}>
          Edit
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='formBasicEmail'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  placeholder='....'
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='formBasicEmail'>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type='text'
                  placeholder='....'
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='formBasicEmail'>
                <Form.Label>Content</Form.Label>
                <Form.Control
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type='text'
                  placeholder='....'
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={handleClose}>
              Close
            </Button>
            <Button
              variant='primary'
              onClick={() => handleSave()}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default ModalUpdate;
