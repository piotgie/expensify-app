import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is from my EDIT Expense with id of {props.match.params.id}
        </div>
    )
};

export {EditExpensePage};