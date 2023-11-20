'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { mutate } from 'swr';

const ModalAddNew = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (!show) {
      setAuthor('');
      setTitle('');
      setContent('');
    }
  }, [show]);

  const handleSave = async () => {
    const rawResponse = await fetch('http://localhost:8000/blogs', {
      method: 'POST',
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
          variant='primary'
          onClick={handleShow}>
          New blog
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

export default ModalAddNew;
