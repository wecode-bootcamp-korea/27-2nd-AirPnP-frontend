import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LeftKeywordButton from './LeftKeywordButton/LeftKeywordButton';
import RightKeywordButton from './RightKeywordButton/RightKeywordButton';
import ContentBox from './ContentBox/ContentBox';
import Pagination from './Pagination/Pagination';
import Map from '../../components/Map/Map';
import { useLocation } from 'react-router-dom';
import API_CONFIG from '../../config';
import queryString from 'query-string';

const LIMIT = 10;
function ListPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const offset = (page - 1) * LIMIT;
  const { category, start, end, term } = queryString.parse(location.search);

  useEffect(() => {
    fetch(
      API_CONFIG.HOST_LIST +
        `?category=${category}&start_date=${start}&end_date=${end}`
    )
      .then(res => res.json())
      .then(res => {
        setPosts(res.RESULT);
        setFilteredPost(res.RESULT);
      });
  }, [category, start, end, term]);

  const filterList = category => {
    setFilteredPost(posts.filter(post => post.category === category));
    setPage(1);
  };

  const filterListByMap = address => {
    setFilteredPost(posts.filter(post => post.address === address));
    setPage(1);
  };

  return (
    <ListPageContainer>
      {posts.length && (
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
            posts={posts}
            term={term}
          />
          <Pagination
            total={filteredPost.length}
            limit={LIMIT}
            page={page}
            setPage={setPage}
          />
        </LeftSection>
      )}
      {posts.length && (
        <MapWrap>
          <Map posts={posts} filterListByMap={filterListByMap} />
        </MapWrap>
      )}
    </ListPageContainer>
  );
}

const ListPageContainer = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  z-index: 2;
  width: 840px;
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

const MapWrap = styled.div`
  width: 100vw;
  width: 100vw;
`;

export default ListPage;
