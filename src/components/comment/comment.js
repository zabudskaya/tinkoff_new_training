import './comment.pcss';

class Comment {
    constructor(block) {
        this.block = block;

        this.data = {
          count: 0
        };

        this.el = {
            amount: this.block.querySelector('.comment__amount'),
            add: this.block.querySelector('.comment__add-comment'),
            buttons: this.block.querySelector('.comment__buttons'),
            cancel: this.block.querySelector('.comment__cancel'),
            save: this.block.querySelector('.comment__save'),
            content: this.block.querySelector('.comment__content'),
            input: this.block.querySelector('.comment__content-input'),
            symbols: this.block.querySelector('.comment__symbols'),
            footer: this.block.querySelector('.comment__footer'),
            arrowDown: this.block.querySelector('.arrow-down'),
            arrowUp: this.block.querySelector('.arrow-up'),
            arrow: this.block.querySelector('.comment__arrow'),
            commentItems: this.block.querySelector('.comment__items')
        };

        this.el.add.addEventListener('click', () => this.addComment());
        this.el.input.addEventListener('keyup', () => this.amountSymbols());
        this.el.cancel.addEventListener('click', () => this.cancel());
        this.el.save.addEventListener('click', () => this.save());
        this.el.arrow.addEventListener('click', () => this.arrow());
    }

    arrow(){
        if(this.el.arrow.classList.contains('active')){
            this.el.arrow.classList.remove('active');
            this.el.arrowDown.classList.add('hidden');
            this.el.arrowUp.classList.remove('hidden');
            this.el.commentItems.classList.remove('hidden');


        }else{
            this.el.arrow.classList.add('active');
            this.el.arrowDown.classList.remove('hidden');
            this.el.arrowUp.classList.add('hidden');
            this.el.commentItems.classList.add('hidden');


        }
    }

    addComment() {
        this.el.add.classList.add('hidden');
        this.el.content.classList.remove('hidden');
        this.el.buttons.classList.remove('comment__buttons_hidden');
    }

    amountSymbols() {
        this.el.symbols.innerHTML = this.el.input.value.length;
    }

    cancel() {
        this.el.input.value = '';
        this.el.content.classList.add('hidden');
        this.el.buttons.classList.add('comment__buttons_hidden');
        this.el.add.classList.remove('hidden');
        this.amountSymbols();
    }

    save() {
        if(this.el.input.value.length > 0){
            if(this.el.arrowUp.classList.contains('hidden') && this.el.arrowDown.classList.contains('hidden')){
                this.el.arrowUp.classList.remove('hidden');
            }
          this.data.count++;
          this.el.amount.innerHTML = this.data.count;
          this.el.save.classList.remove('comment__save_blocking');
          this.send(this.el.input.value);
          this.cancel();
        }else{
          this.el.save.classList.add('comment__save_blocking');
        }

    }

    /**
     * Генерирует текущую дату
     */
    formatDate() {
        const formatter = new Intl.DateTimeFormat('ru', {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return formatter.format(new Date()).replace(',', '');
    }

    send(message) {
        const saveComment = document.createElement('div');
        saveComment.classList.add('save-comment');
        //вставляем в созданный div дату и текст комментария
        saveComment.innerHTML = `<div class="save-comment__date">${this.formatDate()} </div>
        <div class="save-comment__message">${message} </div>`;

        this.el.commentItems.appendChild(saveComment);

    }
}

Layout.add('.comment', Comment);
