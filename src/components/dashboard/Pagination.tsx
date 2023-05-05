import clsx from 'clsx'
import React from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import ReactPaginate from 'react-paginate'

function Pagination(props: any) {
    const { pageCount, handlePageClick } = props
    return (
        <ReactPaginate
            pageCount={pageCount}
            className='mt-10 flex gap-5 justify-center pr-32 text-md py-2 items-end bg-[#00000011]'
            pageClassName={clsx('page-link', 'bg-white', 'border-gray-300', 'text-gray-700', 'hover:bg-gray-100')}
            activeClassName={'active text-blue-400 font-bold'}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            previousClassName='cursor-pointer'
            nextClassName='cursor-pointer'
            previousLabel={<ArrowLeftCircle />}
            nextLabel={<ArrowRightCircle />}
            containerClassName={'pagination'}
        />
    )
}

export default Pagination