import SideBar from './sideBar/SideBar'
import Posts from './post/Posts'
import { ReactLenis } from '@studio-freight/react-lenis'

const HomePage = () => {

  return (
    <ReactLenis root>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <Posts />
      </div>
    </ReactLenis>
  );
};
export default HomePage