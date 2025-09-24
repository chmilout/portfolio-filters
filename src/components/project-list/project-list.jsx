import './project-list.css';

export const ProjectList = ({ projects }) => {
  return (
    <div className='list'>
      {projects.map((el, idx) => (
        <div className='item' key={idx}><img src={el.img} /></div>
      ))}
    </div>
  );
};
