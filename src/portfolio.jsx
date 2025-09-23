import { useState } from 'react';
import { Toolbar, ProjectList } from './components';
import { filters, mock_data } from './data';
import './portfolio.css';

export const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [filteredList, setFilteredList] = useState(mock_data);

  const handleChangeSelected = (filter) => {
    const selectedItem = filters.find((item) => item.id === filter.id);
    const filteredBySelectedItem = mock_data.filter(
      (el) => el.category === selectedItem.name
    );
    setSelectedFilter(selectedItem);
    setFilteredList(
      !filteredBySelectedItem.length ? mock_data : filteredBySelectedItem
    );
  };
  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={handleChangeSelected}
      />
      <ProjectList projects={filteredList} />
    </div>
  );
};
