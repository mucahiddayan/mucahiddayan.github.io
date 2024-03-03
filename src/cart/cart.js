import {
  h,
  render,
  signal,
  effect,
} from 'https://cdn.jsdelivr.net/npm/preact-htm-signals-standalone@0.0.12/+esm';

import htm from 'https://esm.sh/htm';
const html = htm.bind(h);

export default function Cart({ shoppingCart, shaking }) {
  return html`<div
    style="display:flex"
    data-shaking="${shaking.value}"
    class="{${shaking.value ? 'shakining' : ''}}"
    class="material-symbols-outlined mdl-badge mdl-badge--overlap"
    data-badge="${shoppingCart.value.length}"
  >
    shopping_cart
  </div>`;
}
