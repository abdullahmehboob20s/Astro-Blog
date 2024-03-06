function Navbar() {
  return (
    <ul className="flex items-center space-x-8 h-14 border-b px-8">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/blog">Blogs</a>
      </li>
    </ul>
  );
}

export default Navbar;
