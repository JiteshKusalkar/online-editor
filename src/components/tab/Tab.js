import React from 'react';

export default (props) => {
    return (
        <li className={`tab ${props.isActive ? 'active' : ''}`}>
            <a className="tab-link"
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                {props.tabName}
            </a>
            <i className="fa fa-times" aria-hidden="true"></i>
        </li>
    )
}