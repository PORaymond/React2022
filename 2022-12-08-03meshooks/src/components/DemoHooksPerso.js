
import { useWindowsSize } from './useWindowsSize';

const DemoHooksPerso = () => {
   const [largeur,hauteur] = useWindowsSize();
   
  


    return (
        <div>
            La largeur est {largeur}px et la hauteur est {hauteur} px;

        </div>
    );
};

export default DemoHooksPerso;
