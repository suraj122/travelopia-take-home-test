function Banner() {
  return (
    <main>
      <article className="banner">
        <figure className="h-full relative">
          <img
            className="w-full h-full object-cover"
            src="/images/travel.jpeg"
            alt="Boating in sea under the moutains"
          />
          <figcaption className="text-center absolute bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div>
              <header>
                <h1 className="text-white">
                  <strong className="text-xl font-normal inline-block">
                    THE WORLD&apos;S LEADING COLLECTION OF
                  </strong>
                  <br />
                  <strong className="text-5xl inline-block mt-3">
                    EXPERIENTIAL TRAVEL BRANDS
                  </strong>
                </h1>
              </header>

              <footer>
                <button
                  onClick={() => alert("Hello World!")}
                  className="bg-black px-4 py-3 text-xl text-white rounded inline-block mt-4"
                >
                  Click here
                </button>
              </footer>
            </div>
          </figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Banner;
