const primaryHeader = document.querySelector('nav');
const scrollWatcher = document.createElement('div');
const filler = document.querySelector('.filler');


scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);


const navObserver = new IntersectionObserver(
    (entries) => {
        primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
    }, {
        rootMargin: "100px 0px 0px 0px"
    }
);

navObserver.observe(scrollWatcher);

const fillerWatcher = document.createElement('div');
fillerWatcher.style.position = 'absolute';
fillerWatcher.style.top = '80vh'; // change to your desired scroll trigger
fillerWatcher.style.width = '1px';
fillerWatcher.style.height = '1px';
document.body.appendChild(fillerWatcher);

const fillerObserver = new IntersectionObserver(
  (entries) => {
    const shouldHide = !entries[0].isIntersecting;
    filler.classList.toggle('hidden', shouldHide);
  },
  {
    rootMargin: '0px',
    threshold: 0
  }
);

fillerObserver.observe(fillerWatcher);