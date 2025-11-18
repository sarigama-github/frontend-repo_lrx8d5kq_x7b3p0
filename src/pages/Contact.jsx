import Contact from '../components/Contact'
import BookingForm from '../components/BookingForm'

export default function ContactPage(){
  return (
    <div className="bg-white">
      <div className="pt-24">
        <Contact />
        <BookingForm />
      </div>
    </div>
  )
}
