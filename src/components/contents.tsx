import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

export const Contents = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
          data.allContentsJson.edges.map(edge => 
            <div className="card" key={edge.node.id}>
              <img className="card__image" src={edge.node.image_url}/>
              <div className="card__content-wrapper">
                <h3 className="card__title">{edge.node.title}</h3>
                <div className="card__tags">
                  {edge.node.tags.split(",").map(tag =>
                    <p key={tag}>{tag}</p>
                  )}
                </div>
                <p className="card__description">{edge.node.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
};
