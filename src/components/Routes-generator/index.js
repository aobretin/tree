import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';

function RoutesGenerator({
  filteredTree = []
}) {
  const createRecursiveRoutes = (nodes = filteredTree) => {
    return nodes.map(({
      url,
      title,
      children = []
    }, i) => {
      return (
        <Fragment key={i}>
          <Route
            exact
            path={`/${url}`}
            render={() => <div>Welcome to <strong>{title}</strong> page</div>}
          />
          {children.length ? createRecursiveRoutes(children) : null}
        </Fragment>
      )
    });
  }

  return (
    <Fragment>
      <Route
        exact
        path="/"
        render={() => <div>Welcome! Please choose a path :)</div>}
      />
      {createRecursiveRoutes()}
    </Fragment>
  )
}

RoutesGenerator.propTypes = {
  filteredTree: PropTypes.array.isRequired
}

export default RoutesGenerator;
