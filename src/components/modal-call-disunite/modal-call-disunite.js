import './modal-call-disunite.pcss';
import VanillaModal from 'vanilla-modal';

class Modal {
    constructor(block) {
        this.block = block;
        this.modal = new VanillaModal({
            modal: '.modal',
            modalInner: '.modal-inner',
            modalContent: '.modal-content',
            open: '[data-modal-open]',
            close: '[data-modal-close]',
            page: 'body',
            loadClass: 'vanilla-modal',
            class: 'modal-visible',
            clickOutside: false,
            closeKeys: [27],

            transitions: true,
            onBeforeOpen: null,
            onBeforeClose: null,
            onOpen: null,
            onClose: null
        });
    }
}

Layout.add('.modal', Modal);
