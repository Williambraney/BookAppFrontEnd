import { useState } from "react";
import FsLightbox from 'fslightbox-react';
import BookLarge from '../BookLarge';
import BookSmall from '../BookSmall';

const LightBox = ({ productsImages }) => {
    const [toggler, setToggler] = useState(false);
    const [productIndex, setProductIndex] = useState(0);

    return (
        <>
            <button onClick={() => setToggler(!toggler)}>
                Toggle Lightbox
            </button>
            <FsLightbox
                toggler={toggler}
                sources={[
                    <div style={{ width: "1100px", height: "800px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <BookLarge />
                    </div>
                ]}
            />
        </>
    );
}

export default LightBox