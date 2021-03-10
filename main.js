/*For tab switching*/ 
const tabWrapper = document.querySelectorAll('.tab-wrapper');
const tabContentWrapper = document.querySelectorAll('.tab-content-wrapper');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('current-tab');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabWrapper.forEach(item=>item.classList.remove('current-tab'));
}

function removeShow() {
    tabContentWrapper.forEach(item=>item.classList.remove('show'));
}

tabWrapper.forEach(item => item.addEventListener('click',selectItem));

/*modal opening and closing*/
const modalOpenBtn = document.querySelectorAll('.modal-open');
const modal = document.querySelectorAll('.modal');
const modalCloseBtn = document.querySelectorAll('.modal-close');

function openModal() {
    const modalContent = document.querySelector(`#${this.id}-content`);
    modalContent.classList.add('modal-active');
}

function closeModal() {
    modal.forEach(item=>item.classList.remove('modal-active'));
}

modalOpenBtn.forEach(item => item.addEventListener('click',openModal));
modalCloseBtn.forEach(item => item.addEventListener('click', closeModal));
