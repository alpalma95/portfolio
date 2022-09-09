import "../../styles/components/_imgGroup.scss";

const imgGroup = ({ img1, alt1, img2, alt2 }) => {
  return (
    <div className="img-group">
      <img className="img--1" src={img1} alt={alt1} />
      <img className="img--2" src={img2} alt={alt2} />
    </div>
  );
};

export default imgGroup;
