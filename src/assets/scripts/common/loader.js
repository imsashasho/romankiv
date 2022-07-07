import gsap from 'gsap';

const preloaderRef = document.querySelector('.preloader');
export const preloader = {
  el: preloaderRef,
  subscribers: [],
  remove() {
    console.log(this.subscribers, 'before remove');
    gsap.to(preloaderRef, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        console.log(preloader);
        this.subscribers.forEach(fn => fn());
        this.el.remove();
      },
    });
  },
  onRemove(fn) {
    this.subscribers.push(fn);
    console.log(this.subscribers, 'onRemove');
  },
};

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.remove();
  }, 100);
});

// export default preloader;