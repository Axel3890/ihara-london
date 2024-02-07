import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Prendas() {
  return (
    (<section className="w-full py-6 md:py-12 xl:py-16">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3xl-[calc(50%-24px)]">
          <div className="flex items-start">
            <img
              alt="Jacket"
              className="aspect-square object-cover border border-gray-200 rounded-xl w-full overflow-hidden dark:border-gray-800"
              height="500"
              src="/placeholder.svg"
              width="500" />
          </div>
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div
                className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">New Arrival</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Urban Explorer Jacket</h1>
              <div className="grid gap-0.5 items-start sm:flex sm:gap-1.5">
                <h2 className="text-2xl font-bold">$99</h2>
                <Button size="sm" variant="outline">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Add to wishlist
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">Free shipping on all orders</p>
            </div>
            <div className="grid gap-2">
              <p>
                The Urban Explorer Jacket is designed for those who seek adventure in the heart of the city. Crafted
                with the perfect blend of style and functionality, this jacket is ready to accompany you on all your
                urban escapades.
              </p>
              <p>Features:</p>
              <ul className="grid gap-2">
                <li>Water-resistant fabric to keep you dry on rainy days</li>
                <li>Breathable mesh lining for all-day comfort</li>
                <li>Multiple pockets for convenient storage</li>
                <li>Adjustable cuffs and hem for </li>
              </ul>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#">
              Contact on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>)
  );
}


function HeartIcon(props) {
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
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}