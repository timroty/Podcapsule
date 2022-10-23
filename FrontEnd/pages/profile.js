import Link from 'next/link'
import { Card, Typography, Space } from '@supabase/ui'
import { supabase } from '../lib/initSupabase'
import { useState, useEffect } from "react";

export default function Profile({ user }) {

  useEffect(() => {
    //console.log(supabase.auth.user() )
    //console.log(supabase.auth.session().access_token)
  });

  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <Card>
        <Space direction="vertical" size={6}>
          <Typography.Text>You're signed in</Typography.Text>
          <Typography.Text strong>Email: {user.email}</Typography.Text>
          <Typography.Text type="success">
            User data retrieved server-side (from Cookie in getServerSideProps):
          </Typography.Text>

          <Typography.Text>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Typography.Text>

          <Typography.Text>
            <Link href="/">
              <a>Static example with useSWR</a>
            </Link>
          </Typography.Text>
        </Space>
      </Card>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  await supabase.auth.api.getAuthCookieString

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}
