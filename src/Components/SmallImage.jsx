import React from 'react';

function SmallImage({img, ...props}) {


    return (
        <div className={'w-full sm:w-[278px] h-[346px] '+props.additionalStyle}>
            <img className={'w-full sm:w-[278px] h-[346px] rounded-xl object-cover'} style={{...props}} src={img} alt='img.jpg'/>
        </div>
    );
}

export default SmallImage;