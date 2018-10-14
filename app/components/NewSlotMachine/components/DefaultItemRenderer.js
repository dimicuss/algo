import React from 'react';
import { any } from 'prop-types';


class DefaultItemRenderer extends React.Component {
  render() {
    return this.props.children;
  }
}


DefaultItemRenderer.propTypes = {
  children: any.isRequired,
};


export default function renderItem(data, i) {
  return <DefaultItemRenderer key={i}>{data}</DefaultItemRenderer>;
}
