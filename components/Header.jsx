import Link from 'next/link'


const Header = () => (

  <header>

    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/movies" >
          <a>All Movies List</a>
        </Link>
      </li>
      <li>
        <Link href="/top" >
          <a>Top Movies List</a>
        </Link>
      </li>
      <li>
        <Link
          href="/post/[...slug]"
          as="/post/2020/first-post/"
          >
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link
          href="/post/[...slug]"
          as="/post/2020/second-post"
          >
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  
  </header>
)

export default Header