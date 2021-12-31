import React from 'react';
import PropTypes from 'prop-types';

Paginate.propTypes = {
    pagination : PropTypes.object.isRequired,
    onChangePage: PropTypes.func
};

Paginate.defaultProps = {
    onChangePage: null
}

function Paginate(props) {
    const {pagination, onChangePage} = props;
    const {_page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows/ _limit);


    function handlePageChange(newPage){
        if(onChangePage){
            onChangePage(newPage)
        }
    }

    return (
        <div>
        <button disabled={_page<=1} onClick={()=> handlePageChange(_page -1)}>
            Prev
        </button>
        <button disabled={_page>= totalPages} onClick={()=> handlePageChange(_page +1)}>
            Next
        </button>
        </div>
    );
}

export default Paginate;