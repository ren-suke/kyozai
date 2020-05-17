import React, {useEffect, useState, useContext} from 'react';
import Modal from 'react-modal';
import {useStaticQuery, graphql} from 'gatsby';
import { SearchItemsContext } from '../context/SearchItemsContext';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#___gatsby')
export const SearchModal: React.FC<Props> = ({
  isOpen,
  onRequestClose
}) => {
  const {searchItems, setSearchItems} = useContext(SearchItemsContext);
  const [tags, setTags] = useState<Array<string>>([]);
  const data = useStaticQuery(graphql`
    query GetAllContents {
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

  useEffect(() => {
    const tags = data.allContentsJson.edges.map(edge => {
      return(
        edge.node.tags.split(",")
      )
    });
    const flatSetTags = tags.flat().filter((tag, i, self) => {
      return self.indexOf(tag) === i;
    });
    setTags(flatSetTags);
  }, [data])

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      style={customStyles}>
      <div className="modal">
        <div className="modal__search-items">
          {searchItems.length !== 0 ? searchItems.filter((tag, i, self) => {
            return self.indexOf(tag) === i;
          }).map(item => 
            <p>
              {item} <span onClick={() => setSearchItems(searchItems.filter(_item => item !== _item))}>×</span>
            </p>
          ) :
          <span>タグでソートする</span>
        } 
        </div>
        <div className="modal__tags">
          {tags.map(tag => 
            <p
              key={Math.random()}
              onClick={() => setSearchItems(searchItems.concat(tag))}>＋{tag}
            </p>
          )}
        </div>
      </div>
    </Modal>
  )
};