import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="container mx-auto flex max-w-3xl justify-end p-4 px-4 py-8">
      <ul className="flex gap-5 font-bold tracking-wider">
        <Link to="/">modules</Link>
        <li>games</li>
      </ul>
    </nav>
  );
};

export { Navbar };
