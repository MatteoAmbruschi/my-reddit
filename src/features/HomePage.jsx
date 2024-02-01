import Posts from './post/Posts'
import { ReactLenis } from '@studio-freight/react-lenis'

const HomePage = () => {

  return (
    <ReactLenis root>
      <div style={{ display: 'flex', width: '100%' }}>  
        <Posts />
      </div>
    </ReactLenis>
  );
};
export default HomePage