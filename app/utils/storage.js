/*
 * @file storage based on ajax
 */

import uuid from 'uuid';
import fetch from 'isomorphic-fetch';

const ENTRIES_PRIFIX = 'http://localhost:8080/api/entries';

function defaultHeaders() {
  const headers = new Headers();
  headers.append('accept', 'application/json');
  headers.append('content-type', 'application/json');
  return headers;
}

function getJSON(url, opts = {}) {
  const headers = defaultHeaders();
  const options = Object.assign({}, {method: 'GET', headers}, opts);
  return fetch(url, options).then(res => res.json());
}

function postJSON(url, data = null, opts = {}) {
  const headers = defaultHeaders();
  const defaultOpts = {method: 'POST', headers};
  if (data) {
    defaultOpts.body = JSON.stringify(data);
  }
  const options = Object.assign(defaultOpts, opts);
  return fetch(url, defaultOpts).then(res => res.json());
}

function putJSON(url, data = null, opts = {}) {
  return postJSON(url, data, Object.assign({ method: 'PUT'}, opts));
}

function deleteJSON(url, opts = {}) {
  return getJSON(url, Object.assign({method: 'DELETE'}, opts));
}

let storage = {
  getAll() {
    return getJSON(`${ENTRIES_PRIFIX}`);
  },
  saveAll(results) {
    window.localStorage.setItem('deskmark', JSON.stringify(results));
  },
  getEssay(id) {
    return getJSON(`${ENTRIES_PRIFIX}/${id}`);
  },
  insertEssay(title, content) {
    let id = uuid.v4();   
    let Essay = {id, title, content};
    return postJSON(`${ENTRIES_PRIFIX}`, Essay);
  },
  deleteEssay(id) {
    return deleteJSON(`${ENTRIES_PRIFIX}/${id}`);
  },
  updateEssay(id, title, content) {
    let Essay = {title, content};
    Essay.time = new Date().getTime();
    return putJSON(`${ENTRIES_PRIFIX}/${id}`, Essay);
  }
};

export default storage;
