import SideBar from './sideBar/SideBar'
import Posts from './post/Posts'
import Lenis from '@studio-freight/lenis'

const HomePage = () => {
  
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <Posts />
    </div>
  );
};
export default HomePage