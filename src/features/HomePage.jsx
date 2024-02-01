import Posts from './post/Posts'
import { ReactLenis } from '@studio-freight/react-lenis'

const HomePage = () => {

  return (
    <ReactLenis root>
        <Posts />
    </ReactLenis>
  );
};
export default HomePage