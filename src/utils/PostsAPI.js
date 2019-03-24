import { headers, api } from './ConfigAPI';

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(({ categories }) => categories);

export const getPostsFromCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const getPostById = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json());

export const getPostComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json());

export const updatePost = ({ id, title, body }) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: { ...headers }
  }).then(res => res.json());

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());

export const voteOnAPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json());