/*
 * @file storage based on firebase
 */

import uuid from 'uuid';
import { fetch, save } from './firebase';

export function getAll() {
  fetch('users').then(users => console.log(users));
  return fetch('users').then(users => users || []);
}

export function saveAll(users) {
  return save('users', users);
}

function updateAll(update) {
  return getAll()
    .then(update)
    .then(saveAll);
}

export function getuser(id) {
  return fetch(`users/${id}`);
}

export function insertuser(title, content,id) {
  const user = {
    title,
    id,
    content
  };

 

  return Promise.all([
    // updateAll(users => [...users, user]),
    save(`users/${user.id}`, user),
  ]).then(() => user);
}

export function deleteuser(id) {
  return Promise.all([
    updateAll(
      users => users.filter(
        (user,index) => index !== id
      )
    ),
    save(`users/${id}`, null),
  ]);
}

export function updateuser(id, title, content) {
  const name = `users/${id}`;
  let user;
 return Promise.all([
    updateAll(
      users => users.map(
        (user,index) => (
          index === id
          ? {
            ...user,
            title,
            content,
          }
          : user
        )
      )
    ),
    fetch(name).then(
      saved => {
        user = {
          ...saved,
          title,
          content,
        };
        return save(name, user);
      }
    ),
  ]).then(() => user);
}
