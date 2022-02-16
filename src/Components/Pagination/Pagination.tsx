import React from 'react';
import { setCurrentPageAC } from "../../store/reducers/pagination-reducer";
import { useDispatch } from "react-redux";
import { v1 } from 'uuid';
import style from "./Pagination.module.css"

type PaginationPropsType = {
    currentPage: number,
    limit: number,
    startTodo: number,
    endTodo: number,
    countTodos: number
}

const Pagination = (props: PaginationPropsType) => {

    const {countTodos, currentPage, limit} = props
    const dispatch = useDispatch()
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countTodos / limit); i++) {
        pageNumbers.push(i);
    }

    const setCurrentPage = (number: number) => {
        dispatch(setCurrentPageAC(number))
    }

    return (
            <div className={style.Pagination}>

                {pageNumbers.map(number => (
                    <div
                        className={`${style.Page} ${(number===currentPage) && style.ActivePage}`}
                        key={v1()}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </div>
                ))}
            </div>
    );
};

export default Pagination;
