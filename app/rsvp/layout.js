import Rsvp from '@/components/rsvp/Rsvp'
 
export const metadata = {
  title: "RSVP - Gift and Daniel's Tale",
}

export default function Layout({ children }) {
  return (
    // Do what you need to do
    <>
      <Rsvp>
        {children}
      </Rsvp>
    </>
  )
}