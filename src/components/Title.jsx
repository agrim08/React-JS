import Logo from "../assets/Logo.jpg";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="h-20 w-22 px-3 py-2 mr-5" src={Logo} alt="logo" />
      </a>
    </>
  );
};
export default Title;
