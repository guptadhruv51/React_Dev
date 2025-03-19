
function Header()
{
  const name="Dhruv Gupta";
const profession="Back End Developer, ML Engineer, Data Scientist";
  return (
<header className='header'>
    <h1>{name}</h1>
    <p>{profession}</p>
    <nav>
      <a href='#about'> About</a>
      <a href='#projects'> Projects </a>
      <a href='#contact'> Contact </a>
    </nav>
    </header>
  );
}
export default Header;