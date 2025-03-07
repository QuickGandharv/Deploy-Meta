const Title = ({ title, id, classname }) => {
  return (
    <h2 id={id} className={`text-black-default capitalize ${classname}`}>
      {title}
    </h2>
  );
};

export default Title;
