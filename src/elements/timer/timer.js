import './timer.pcss';

class Timer {
    constructor(block){
        this.block = block;

        this.el = {
            end: 0,
            start: 5,
        };

        const interval = setInterval(() => {
            let sec = this.el.start - this.el.end;
            this.block.innerHTML = String(sec);
            if (this.el.end >= this.el.start ) {
                this.block.classList.add('hidden');
                clearInterval(interval);
            }
            this.el.end++;
        }, 1000);

    }
}

Layout.add('.timer', Timer);