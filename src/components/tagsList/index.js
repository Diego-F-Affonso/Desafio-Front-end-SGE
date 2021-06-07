import React, { useContext, useEffect, useState } from 'react';
import CatsContext from '../../context/catsContext';
import './index.css';

function TagsList() {
  const { tags, fetchTags, cats, fetchCats } = useContext(CatsContext);
  const [tagToFilter, setTagToFilter] = useState('');
  const [catFilter, setCatFilter] = useState([]);

  useEffect(() => {
    if (tags !== undefined && tags.length === 0) fetchTags();
    if (cats !== undefined && cats.length === 0) fetchCats();
    console.log(catFilter);
  }, []);

  function filterTag(filter) {
    setCatFilter([]);
    const filterResulted = cats.filter((item) => {
      return item.tags.indexOf(filter) >= 0;
    });
    return setCatFilter(filterResulted);
  }

  useEffect(() => {
    filterTag(tagToFilter);
  }, [tagToFilter]);

  return (
    <div>
      <div className="list">
        {tags.map((tag, index) => {
          return (
            <span
              key={tag}
              role="button"
              tabIndex={index}
              onClick={({ currentTarget }) => {
                const ul = currentTarget.children[0];
                const li = ul.children[0];
                if (li.className === 'active') {
                  li.className = 'test';
                } else {
                  li.className = 'active';
                }
                setTagToFilter(tag);
              }}
              onKeyDown={() => {
                return 0;
              }}
            >
              <ul>
                {tag}
                <li className="test">
                  {catFilter.map((item) => {
                    return <p key={item}>{item.id}</p>;
                  })}
                </li>
              </ul>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TagsList;
