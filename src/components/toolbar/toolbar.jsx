import './toolbar.css';
import classNames from 'classnames';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="filter_list">
      {filters.map((el) => {
        const btnClass = classNames({
          filter_btn: true,
          selected: el.id === selected.id,
        });

        return (
          <button
            key={el.name}
            className={btnClass}
            onClick={() => onSelectFilter(el)}
          >
            {el.name}
          </button>
        );
      })}
    </div>
  );
};
