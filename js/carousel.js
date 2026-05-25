/* ============================================================
   WRNS CAROUSEL — Single-item, arrow-nav, no dots carousel
   ============================================================ */

class Carousel {
  /**
   * @param {HTMLElement} root  — container element
   * @param {string[]}    items — array of question strings (or objects)
   * @param {object}      opts
   *   opts.deckColor   — accent color string
   *   opts.deckTitle   — deck title
   *   opts.onFlip      — callback on card change
   *   opts.renderCard  — fn(item, index, total) => HTMLElement
   */
  constructor(root, items, opts = {}) {
    this.root = root;
    this.items = items;
    this.current = 0;
    this.opts = opts;
    this.animating = false;
    this._render();
    this._bindKeys();
  }

  _render() {
    this.root.innerHTML = '';
    this.root.className = 'carousel-root';

    // Counter
    this.counter = document.createElement('div');
    this.counter.className = 'carousel-counter';
    this._updateCounter();
    this.root.appendChild(this.counter);

    // Stage
    this.stage = document.createElement('div');
    this.stage.className = 'carousel-stage';

    // Card wrapper
    this.cardWrap = document.createElement('div');
    this.cardWrap.className = 'carousel-card-wrap';
    this.stage.appendChild(this.cardWrap);
    this.root.appendChild(this.stage);

    // Render first card
    this._renderCard('enter-right');

    // Controls
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';

    this.btnPrev = this._makeBtn('← prev', 'btn-prev', () => this.prev());
    this.btnNext = this._makeBtn('next →', 'btn-next', () => this.next());

    controls.appendChild(this.btnPrev);
    controls.appendChild(this.btnNext);
    this.root.appendChild(controls);

    this._updateButtons();
  }

  _makeBtn(label, cls, handler) {
    const btn = document.createElement('button');
    btn.className = `carousel-btn ${cls}`;
    btn.textContent = label;
    btn.addEventListener('click', handler);
    // Touch support
    btn.addEventListener('touchend', (e) => { e.preventDefault(); handler(); });
    return btn;
  }

  _renderCard(anim) {
    this.cardWrap.innerHTML = '';
    const item = this.items[this.current];
    let card;

    if (this.opts.renderCard) {
      card = this.opts.renderCard(item, this.current, this.items.length);
    } else {
      card = this._defaultCard(item);
    }

    card.classList.add('carousel-card', anim);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.classList.remove('enter-right', 'enter-left');
        card.classList.add('entered');
      });
    });
    this.cardWrap.appendChild(card);
  }

  _defaultCard(item) {
    const el = document.createElement('div');
    el.className = 'default-card';
    el.style.borderColor = this.opts.deckColor || '#0047FF';
    el.innerHTML = `<p>${typeof item === 'string' ? item : item.q}</p>`;
    return el;
  }

  _updateCounter() {
    this.counter.textContent = `${this.current + 1} / ${this.items.length}`;
  }

  _updateButtons() {
    this.btnPrev.disabled = this.current === 0;
    this.btnNext.disabled = this.current === this.items.length - 1;
    this.btnPrev.classList.toggle('disabled', this.current === 0);
    this.btnNext.classList.toggle('disabled', this.current === this.items.length - 1);
  }

  _bindKeys() {
    this._keyHandler = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') this.next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') this.prev();
    };
    document.addEventListener('keydown', this._keyHandler);
  }

  destroy() {
    document.removeEventListener('keydown', this._keyHandler);
  }

  go(idx, dir) {
    if (this.animating) return;
    if (idx < 0 || idx >= this.items.length) return;
    this.animating = true;

    const exitCls = dir === 'next' ? 'exit-left' : 'exit-right';
    const enterCls = dir === 'next' ? 'enter-right' : 'enter-left';

    const old = this.cardWrap.querySelector('.carousel-card');
    if (old) {
      old.classList.remove('entered');
      old.classList.add(exitCls);
      old.addEventListener('animationend', () => {
        this.current = idx;
        this._updateCounter();
        this._updateButtons();
        this._renderCard(enterCls);
        this.animating = false;
        if (this.opts.onFlip) this.opts.onFlip(this.current, this.items[this.current]);
      }, { once: true });
    } else {
      this.current = idx;
      this._renderCard(enterCls);
      this.animating = false;
    }
  }

  next() {
    if (this.current < this.items.length - 1) {
      if (typeof Sounds !== 'undefined') Sounds.playWhoosh();
      this.go(this.current + 1, 'next');
    }
  }

  prev() {
    if (this.current > 0) {
      if (typeof Sounds !== 'undefined') Sounds.playWhoosh();
      this.go(this.current - 1, 'prev');
    }
  }

  shuffle(newItems) {
    this.items = newItems;
    this.current = 0;
    this._renderCard('enter-right');
    this._updateCounter();
    this._updateButtons();
    if (typeof Sounds !== 'undefined') Sounds.playReveal();
  }

  reset() {
    this.current = 0;
    this._renderCard('enter-right');
    this._updateCounter();
    this._updateButtons();
  }

  // Swipe support
  enableSwipe() {
    let startX = 0;
    this.stage.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    this.stage.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { dx < 0 ? this.next() : this.prev(); }
    }, { passive: true });
    // Mouse drag
    let dragging = false, mx = 0;
    this.stage.addEventListener('mousedown', (e) => { dragging = true; mx = e.clientX; });
    window.addEventListener('mouseup', (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.clientX - mx;
      if (Math.abs(dx) > 60) { dx < 0 ? this.next() : this.prev(); }
    });
  }
}
