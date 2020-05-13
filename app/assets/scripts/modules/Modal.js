import $ from 'jquery';
class Modal {
    constructor() {
        this.openModalButtons = $(".open-modal");
        this.modal = $(".modal");
        this.modalCloseButton = $(".modal-close");
        this.events();
    }

    events() {
        this.openModalButtons.click(this.openModal.bind(this)); //arrow operator automatically binds & bind keywords use to bind this
        this.modalCloseButton.click(this.closeModal.bind(this));
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    openModal() {
        this.modal.addClass("modal-is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal-is-visible");
    }
    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }
}

export default Modal;