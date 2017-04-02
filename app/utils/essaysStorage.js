/*
 * @file storage based on firebase
 */

import uuid from 'uuid';
import { fetch, save } from './firebase';

export function getAll() {
  return fetch('essays').then(essays => essays || []);
}

export function saveAll(essays) {
  return save('essays', essays);
}

function updateAll(update) {
  return getAll()
    .then(update)
    .then(saveAll);
}

export function getEssay(id) {
  return fetch(`essays/${id}`);
}

export function insertEssay(title, content,id) {
  const essay = {
    title,
    id,
    content
  };

  const Essay = {
    ...essay,
    content,
  };

  return Promise.all([
    // updateAll(essays => [...essays, essay]),
    save(`essays/${Essay.id}`, Essay),
  ]).then(() => Essay);
}

export function deleteEssay(id) {
  return Promise.all([
    updateAll(
      essays => essays.filter(
        (essay,index) => index !== id
      )
    ),
    save(`essays/${id}`, null),
  ]);
}

export function updateEssay(id, title, content) {
  const name = `essays/${id}`;
  let Essay;
 return Promise.all([
    updateAll(
      essays => essays.map(
        (essay,index) => (
          index === id
          ? {
            ...essay,
            title,
            content,
          }
          : essay
        )
      )
    ),
    fetch(name).then(
      saved => {
        Essay = {
          ...saved,
          title,
          content,
        };
        return save(name, Essay);
      }
    ),
  ]).then(() => Essay);
}
