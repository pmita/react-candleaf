//ASSETS
import { BrandLogos } from '../../assets/variables/BrandLogos';
import './style.scss';

const Brands = () => {
    return(
        <div className='brands-section'>
            <h2>As trusted by</h2>
            <div className='brands-showcase'>
                {BrandLogos && BrandLogos.map(logo => (
                    <img
                        key={logo.id}
                        src={logo.img_href}
                        alt={logo.altText}
                    />
                ))}
            </div>
        </div>
    );
}

export default Brands;