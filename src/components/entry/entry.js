import './entry.pcss';

class Entry {
  constructor(block) {
    this.block = block;

    this.el = {
      select: this.block.querySelector('.entry__options')
    };

    this.el.select.addEventListener('input', event => {
      this.goPage();
      event.preventDefault();
    });
  }

  /**
   * Перейти к странице
   */
  goPage() {
    //обозначает строку пути относительно хоста
    let pathname = location.pathname.replace('index.html', this.el.select.value);

    if (pathname === location.pathname) {
      pathname += this.el.select.value;
    }

    location.pathname = pathname;
  }
}

Layout.add('.entry', Entry);
