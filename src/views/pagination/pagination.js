import React, { useState, useEffect } from "react";
import { Button, Table } from 'react-bootstrap'
const Pagination = ({ showPerPage, onPaginationChange, total,page }) => {
  const [counter, setCounter] = useState(page);
  const [numberOfButtons, setNumberOfButoons] = useState(
  );

 console.log("numberOfButtons",numberOfButtons )
 console.log("total",total )
 console.log("counter",counter )
 console.log("showPerPage",showPerPage )
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(counter, value - showPerPage);
    setNumberOfButoons(Math.ceil(total / showPerPage))
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              // href="!#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </a>
          </li>

          {new Array(numberOfButtons).fill("").map((el, index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a
                class="page-link"
                // href="!#"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a
              class="page-link"
              // href="!#"
              onClick={() => onButtonClick("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;