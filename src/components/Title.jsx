import Logo from "../assets/Logo.jpg";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="logo-image" src={Logo} alt="logo" />
      </a>
    </>
  );
};
export default Title;
