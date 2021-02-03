import React from 'react';
import './pagination.scss'
import PropTypes from 'prop-types';

Pagination.propTypes = {

};

function Pagination(props) {
    const { pagination, onChangePage } = props;
    const { _limit, _page, _totalRow } = pagination;

    const totalPage = Math.ceil(_totalRow / _limit);

    function handleChangePage(newPage) {
        if (onChangePage) {
            onChangePage(newPage);
        }
    }
    return (
        <div>
            <button className="pagination-btn" disabled={_page <= 1} onClick={() => handleChangePage(_page - 1)}>Prev</button>
            <button className="pagination-btn" disabled={_page >= totalPage} onClick={() => handleChangePage(_page + 1)}>Next</button>
        </div>
    );
}

export default Pagination;