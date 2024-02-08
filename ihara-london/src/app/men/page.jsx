import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"

export default function Men() {
  return (
    (<section key="1" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="font-bold tracking-tight md:text-4xl">Summer Collection</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Hot Picks from the Summer Collection: Embrace the Season in Style!
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
          <div class='max-w-md mx-auto'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
</div>

            <div className="flex items-center gap-2">

            <div class="relative mb-6">
    <label for="labels-range-input" class="sr-only">Labels range</label>
    <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
    <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
</div>

            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt="Cover image"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                height={200}
                src="/images/remera.jpg"
                width={200} />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Beach Bliss Flip-Flops</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">Comfortable Footwear</small>
                <h4 className="font-semibold">$19.99</h4>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Cover image"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={200} />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Sunset Shades Sunglasses</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">UV Protection Eyewear</small>
                <h4 className="font-semibold">$29.99</h4>
              </div>
            </div>
            <div className="relative group">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Cover image"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={200} />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Cool Breeze Portable Fan</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">On-the-Go Cooling</small>
                <h4 className="font-semibold">$14.99</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4" />
      <path d="M7 4v16" />
    </svg>)
  );
}
