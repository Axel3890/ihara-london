
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image";

export default function Home() {
  return (
    (<div key="1" className="flex flex-col min-h-screen">
      <section className="w-full h-[500px] md:h-[700px]">
        <Image
          alt="Welcome"
          className="object-cover w-full h-full"
          height="1080"
          src="/images/ropa.jpg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width="1920" />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg md:text-2xl mt-4">Discover the best deals and amazing discounts.</p>
        </div>
      </section>
      <section className="w-full py-12">
      <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
            <div class="text-center">

                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul x-ref="logos" class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="./facebook.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./disney.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./airbnb.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./apple.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./spark.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./samsung.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./quora.svg" alt="Marca" />
                        </li>
                        <li>
                            <img src="./sass.svg" alt="Marca" />
                        </li>
                    </ul>                
                </div>
                
            </div>

        </div>
      </section>
      <section className="w-full py-12 flex items-center justify-center flex-col">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6">
          <Card>
            <Image
              src="/images/remera.jpg" 
              height="700"
              width="200"
              className="object-cover w-full h-full"
          />
          </Card>
          <Card>
            
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"
              className="object-cover w-full h-full"/>
          </Card>
          <Card>
           
              <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"
              className="object-cover w-full h-full"/>
          </Card>
        </div>
        </section>
      <section className="w-full py-12 flex items-center justify-center flex-col">
        <h1 className="center">En promo o algo</h1>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-6">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 1</h2>
              <p className="text-lg mt-2">Category: Shirts</p>
              <p className="text-lg mt-2 font-bold">Price: $49.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 2</h2>
              <p className="text-lg mt-2">Category: Pants</p>
              <p className="text-lg mt-2 font-bold">Price: $59.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 3</h2>
              <p className="text-lg mt-2">Category: Jackets</p>
              <p className="text-lg mt-2 font-bold">Price: $99.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 4</h2>
              <p className="text-lg mt-2">Category: Shoes</p>
              <p className="text-lg mt-2 font-bold">Price: $79.99</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-6">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 1</h2>
              <p className="text-lg mt-2">Category: Shirts</p>
              <p className="text-lg mt-2 font-bold">Price: $49.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 2</h2>
              <p className="text-lg mt-2">Category: Pants</p>
              <p className="text-lg mt-2 font-bold">Price: $59.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 3</h2>
              <p className="text-lg mt-2">Category: Jackets</p>
              <p className="text-lg mt-2 font-bold">Price: $99.99</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
            <Image
              src="/images/remera.jpg" 
              height="200"
              width="400"/>
              <h2 className="text-2xl font-bold">Clothing Item 4</h2>
              <p className="text-lg mt-2">Category: Shoes</p>
              <p className="text-lg mt-2 font-bold">Price: $79.99</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-6" />
      </section>
      <div className="w-full h-[500px] md:h-[700px] mx-auto relative flex justify-center items-center rounded-lg" style={{
    backgroundImage: `url('/images/ropa.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
    <h1 className="text-3xl md:text-5xl font-bold">Limited Time Offer</h1>
    <p className="text-lg md:text-2xl mt-4">Grab the deal before it's gone!</p>
  </div>
</div>



    </div>)
  );
}
