import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contacto() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 text-center md:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below or contact us directly using the information provided.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter your subject" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button>Send message</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              alt="Map"
              className="object-cover"
              height={300}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400} />
          </div>
          <div className="flex justify-center gap-4">
            <Link
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25d366] hover:bg-opacity-75"
              href="#"
              title="Message us on WhatsApp">
              <SmartphoneIcon className="w-4 h-4" />
              <span className="sr-only">Message us on WhatsApp</span>
            </Link>
            <Link
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#c13584] hover:bg-opacity-75"
              href="#"
              title="Follow us on Instagram">
              <InstagramIcon className="w-4 h-4" />
              <span className="sr-only">Follow us on Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </section>)
  );
}


function SmartphoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>)
  );
}


function InstagramIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 12.63 8 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>)
  );
}
