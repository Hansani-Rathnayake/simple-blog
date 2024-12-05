const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul style={{ display: "flex", listStyle: "none", justifyContent: "center" }}>
          {pageNumbers.map((number) => (
            <li key={number} style={{ margin: "0 0.5rem" }}>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  