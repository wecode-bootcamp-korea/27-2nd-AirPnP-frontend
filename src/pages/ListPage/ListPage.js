import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LeftKeywordButton from './LeftKeywordButton/LeftKeywordButton';
import RightKeywordButton from './RightKeywordButton/RightKeywordButton';
import ContentBox from './ContentBox/ContentBox';
import Pagination from './Pagination/Pagination';
import Map from '../../components/Map/Map';

const LIMIT = 10;

function ListPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * LIMIT;

  useEffect(() => {
    fetch('/Data/ContentBox.json')
      .then(res => res.json())
      .then(res => {
        setPosts(res);
        setFilteredPost(res);
      });
  }, []);

  const filterList = category => {
    setFilteredPost(posts.filter(post => post.category === category));
  };

  return (
    <ListPageContainer>
      <LeftSection>
        <HeaderBox>
          <LeftKeywordButton filterList={filterList} />
          <RightLine />
          <RightKeywordButton />
        </HeaderBox>
        <ContentBox
          contentBoxArea={filteredPost}
          offset={offset}
          limit={LIMIT}
        />
        <Pagination
          total={filteredPost.length}
          limit={LIMIT}
          page={page}
          setPage={setFilteredPost}
        />
      </LeftSection>
      <Map />
    </ListPageContainer>
  );
}

const ListPageContainer = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  align-content: stretch;
  z-index: 2;
  min-width: 840px;
  background: ${({ theme }) => theme.white};
  flex-grow: 0;
  flex-shrink: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh; ;
`;

const HeaderBox = styled.div`
  display: flex;
  padding: 20px;
`;

const RightLine = styled.div`
  display: inline-block;
  height: 20px;
  width: 0px;
  margin-right: 16px;
  margin-left: 8px;
  border-left: 1px solid ${({ theme }) => theme.lightGray};
  margin-top: 10px;
`;

export default ListPage;
