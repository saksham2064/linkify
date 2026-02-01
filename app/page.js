export default function Home() {
  return (
    <main>
      <section className="min-h-[100vh] bg-green-800 grid grid-cols-2">
      <div className="flex flex-col  justify-center ml-[10vw] gap-4" >
        <p className="text-6xl font-bold text-yellow-300">Your all-in-one link
          in bio..</p>
        <p className="text-xl text-yellow-300 ">A single bio link designed to help creators showcase content,
          collections, and products across every social platform.</p>
          <div className="flex gap-2 input" >
            <input className="px-2 py-2 rounded-md focus:outline-green-500" type="text" placeholder="linki.fy/username" name="" id="" />
            <button className="px-2 py-2 font-bold bg-pink-400 rounded-full">Claim your linkify</button>
          </div>
          
      </div>
     <div className="flex items-center justify-center mr-[10vw] perspective-1000">
  <div className="w-[300px] max-w-full transform transition-all duration-500 
                  skew-y-6 rotate-3 shadow-2xl rounded-xl overflow-hidden 
                  hover:skew-y-0 hover:rotate-0 hover:scale-105">
    <img
      src="/l.png"
      alt="homepage image"
      className="object-cover w-full h-auto"
    />
  </div>
</div>
      </section>
    </main>
  );
}