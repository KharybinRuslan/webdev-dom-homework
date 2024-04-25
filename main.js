import { getComments } from './api.js';
import { renderComments } from './render.js';
import './events.js';

getComments().then((comments) => {
  renderComments(comments);
});