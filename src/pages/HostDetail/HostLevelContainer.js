import { AiFillHeart } from 'react-icons/ai';

import styled from 'styled-components';

function HostLevel() {
  return (
    <Level>
      <AiFillHeart /> 슈퍼맨
    </Level>
  );
}

const Level = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export default HostLevel;
