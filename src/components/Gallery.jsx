import React from 'react';
import Collection from './gallery/Collection';

const pics = require('./gallery/pics.json');

function Gallery() {
  return (
    <div className="container">
      <div className="row center">
        <div className="col-md-12" align="left">
          <div align="left">
            <table border={0} cellSpacing={70} width="100%" align="left">
              <tbody>
                {pics.map((pic) => (
                  <Collection
                    key={pic.heading}
                    heading={pic.heading}
                    images={pic.images}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
