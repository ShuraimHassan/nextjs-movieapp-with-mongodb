import { useRouter } from 'next/router'
import Header from '../../components/header'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Header />
      <h1>Slug: <code>{ slug.join('/') }</code></h1>
    </>
  )
}

export default Comment