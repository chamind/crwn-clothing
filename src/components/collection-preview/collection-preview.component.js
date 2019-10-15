import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.sass';

const CollectionPreview = ({ title, items }) =>
  <div className="collection-preview">
    <h1 className="title">
      {title.toUpperCase()}
    </h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map(({ id, ...otherCollectionItemProps }) =>
          <CollectionItem key={id} {...otherCollectionItemProps} />
        )}
    </div>
  </div>;

export default CollectionPreview;
