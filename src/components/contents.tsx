import React, {useContext} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {SearchItemsContext} from '../context/SearchItemsContext';

export const Contents = () => {
  const {searchItems} = useContext(SearchItemsContext);
  const data = useStaticQuery(graphql`
    query GetAllContentsJson {
      allContentsJson {
        edges {
          node {
            image_url
            title
            url
            id
            description
            tags
          }
        }
      }
    }
  `)
  return(
    <div className="contents">
      <div className="contents__container">
        {
          data.allContentsJson
            .edges
            .filter(edge => {
              if(searchItems.length === 0) return true;
              let result = false;
              searchItems.forEach(item => {
                if(edge.node.tags.split(",").includes(item)) {
                  result = true;
                }
              })
              return result;
            }).map(edge => 
              <a className="card" href={edge.node.url} target="_blank" key={edge.node.id}>
                <img className="card__image" src={edge.node.image_url} />
                <div className="card__content-wrapper">
                  <h3 className="card__title">{edge.node.title}</h3>
                  <div className="card__tags">
                    {edge.node.tags.split(",").map(tag =>
                      <p key={tag}>{tag}</p>
                    )}
                  </div>
                  <p className="card__description">{edge.node.description}</p>
                </div>
              </a>
            )
        }
      </div>
    </div>
  )
};
