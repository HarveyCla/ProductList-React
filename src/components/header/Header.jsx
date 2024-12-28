import HeaderStyle from "./Header.module.scss"

const Header = ({categories, title}) => {

  // console.log(categories)

  return (
    <div className={HeaderStyle.header}>
      <h1>{title}</h1>
      <div className={HeaderStyle.btn}>
        {
          categories.map((item) => (
            <button key={item} >{item}</button>
          ))
        }
      </div>
    </div>
  );
};

export default Header;