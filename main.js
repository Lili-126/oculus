// header burger-menu
const dialog = document.querySelector('.dialog');
const btnOpen = document.querySelector('.menu__btn-open');
const btnClose = document.querySelector('.menu__btn-close');
/* console.log(dialog); */

btnOpen.addEventListener('click', () => {
  dialog.showModal();
  /* dialog.classList.add('dialog-open'); */
});

btnClose.addEventListener('click', () => {
  dialog.close();
  /* dialog.classList.remove('dialog-open'); */
});



// section feature
const btnItem = document.querySelectorAll('.tabs__btn-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');
/* console.log(btnItem); */


const removeClass = () => {
  btnItem.forEach( (item) => {
  item.classList.remove('tabs__btn-item--active');
});

  tabsContent.forEach( (item) => {
  item.classList.remove('tabs__content-item--active');
});
}


const toggleClass = (evt) => {
  const tabTarget = evt.currentTarget;
  console.log(tabTarget);
  const button = tabTarget.dataset.button;
  console.log(button);

  removeClass();

tabTarget.classList.add('tabs__btn-item--active');
document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

}

const openContent = btnItem.forEach( (elem) => {
  elem.addEventListener('click', toggleClass);
})


// modal video
const modalVideo = document.querySelectorAll('.modal-video');

const openModalVideo = (button) => {
  document.querySelector(`#${button}`).showModal();
}

document.querySelectorAll('.video__btn').forEach((elem) => {
  elem.addEventListener('click', () => {
    const btnOpenVideo = elem.dataset.button;
    if (btnOpenVideo) {
      openModalVideo(btnOpenVideo);
    }
  })
})


const closeModalVideo = (button) => {
  document.querySelector(`#${button}`).close();
}

document.querySelectorAll('.modal-close').forEach((elem) => {
  elem.addEventListener('click', () => {
    const btnClose = elem.dataset.button;
    if (btnClose) {
      closeModalVideo(btnClose);
    }
  })
})


