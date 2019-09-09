import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import './styles.css';

function SearchableTreeNode({
  node: {
    title,
    url,
    isMatch,
    children = []
  } = {},
  index = 1
}) {
  const generateNextNodes = (children = []) => {
    if (children.length) {
      return (
        <div
          style={{paddingLeft: `${20 * index}px`}}
          className="nav flex-column nav-pills"
        >
          {
            children.map((node, i) => {
              return (
                <SearchableTreeNode
                  key={i}
                  node={node}
                  index={index++}
                />
              )
            })
          }
        </div>
      )
    }
  }

  return (
      <Fragment>
        <NavLink
          exact
          data-testid="nav-link"
          activeClassName="active-link"
          className={`nav-link ${isMatch ? "match-node" : ""}`}
          to={`/${url}`}
        >
          {title}
        </NavLink>
        {generateNextNodes(children)}
      </Fragment>
  )
}

SearchableTreeNode.propTypes = {
  node: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default SearchableTreeNode;
