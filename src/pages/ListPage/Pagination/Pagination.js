import styled from 'styled-components';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 50%;
  padding: 8px;
  margin: 0;
  background: #fff;
  color: #222;
  font-size: 1rem;
  width: 30px;
  height: 30px;

  &:hover {
    background: #fff;
    cursor: pointer;
  }

  &[disabled] {
    background: #fff;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #fff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
