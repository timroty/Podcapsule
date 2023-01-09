import Link from 'next/link'
import { Button } from '@supabase/ui'

const Home = () => {
  return (
    <>
    <h1>
      PodCapsule
    </h1>
      <Button>
        <Link href="/sign-in">
        Sign In
        </Link>
      </Button>
    </>
  )
}

export default Home