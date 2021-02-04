import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './InputBox.scss';
InputBox.propTypes = {
    onSubmit: PropTypes.func
};
InputBox.defaultTypes = {
    onSubmit: null
}
function InputBox(props) {
    const [value, setValue] = useState('');
    const { onSubmit } = props;
    const typingTimeoutRef = useRef(null);

    function handleInputChange(e) {
        setValue(e.target.value);

        if (!onSubmit) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef);
        }
        typingTimeoutRef.current = setTimeout(() => {
            const valueSubmit = {
                searchTerm: e.target.value
            }
            // console.log(valueSubmit.searchTerm);
            onSubmit(valueSubmit);
        }, 300);

    }
    return (
        <form className="input-box" >
            <input className="input-box__item" type='text' value={value} onChange={handleInputChange} />
        </form>
    );
}

export default React.memo(InputBox);