import React from "react";

class ColumnHeadings extends React.Component {
  handleClick = (field, e) => {
    if (e.target.classList.contains("sortable")) {
      e.target.className = "sortable sorted true";
      this.props.sortTableNum(field);
    }
  };
  render() {
    return (
      <thead>
        <tr id="colheaders" className="top100">
          <th className="idcol">#</th>
          <th className="sortable sorted true" onClick={e => this.handleClick("Title", e)}>
            Movie Title
          </th>
          <th id="defaultsort">Images</th>
          <th className="sortable" onClick={e => this.handleClick("Year", e)}>
            Year
          </th>
        </tr>
      </thead>
    );
  }
}

export default ColumnHeadings;
