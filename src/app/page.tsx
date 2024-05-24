import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import {auth} from "@/auth"
import Profile from "@/components/profile";
export default async function Home() {
  const session = await auth();


  return (
    <div>
      <form action={actions.signIn}>
      <Button type="submit">
        in
      </Button>
      </form>

      <form action={actions.signOut}>
      <Button type="submit">
        out
      </Button>
      </form>

      {
        session?.user ? <p>{JSON.stringify(session.user)}</p> : <p>out</p>
      }

      <Profile></Profile>
    </div>
  )
}
