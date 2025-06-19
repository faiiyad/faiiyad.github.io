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


const jobs_tags = document.querySelectorAll('.job');
const ico_j = document.querySelectorAll('.ico-res');
const jobs = [...jobs_tags, ...ico_j];

  jobs.forEach(job => {
    job.addEventListener('mouseenter', () => {
      jobs_tags.forEach(j => j.classList.add('hovered_j'));
      ico_j.forEach(j => j.classList.add('hovered_i'));
      console.log("added")
    });
    job.addEventListener('mouseleave', () => {
      jobs_tags.forEach(j => j.classList.remove('hovered_j'));
      ico_j.forEach(j => j.classList.remove('hovered_i'));

      console.log("removed hovered")
    });
  });