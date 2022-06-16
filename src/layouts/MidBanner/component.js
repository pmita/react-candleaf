import './style.scss';

const MidBanner = ({ img, alt, children }) => {
    return(
        <div className='midBanner'>
            <div className='midBanner-left'>
                {children}
            </div>
            <img 
                className='midBanner-right' 
                src={img} 
                alt={alt}
            />
        </div>
    );
}

export default MidBanner;