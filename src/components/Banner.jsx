function Banner() {
  return (
    <main role="main">
      <section role="banner" className="banner">
        <figure className="h-full relative">
          <img
            className="w-full h-full object-cover"
            src="/images/travel.jpeg"
            alt="Boating in sea under the moutains"
            width="1600"
            height="625"
          />
          <figcaption className="text-center absolute bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className="container mx-auto px-6">
              <header>
                <h1 className="text-white">
                  <strong className="text-lg md:text-xl font-normal inline-block">
                    THE WORLD&apos;S LEADING COLLECTION OF
                  </strong>
                  <br />
                  <strong className="text-3xl md:text-5xl inline-block font-medium mt-3">
                    EXPERIENTIAL TRAVEL BRANDS
                  </strong>
                </h1>
              </header>

              <footer>
                <button
                  role="button"
                  onClick={() => alert("Hello World!")}
                  className="bg-accent-900 px-4 py-3 text-xl text-white rounded inline-block mt-8"
                >
                  Click here
                </button>
              </footer>
            </div>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

export default Banner;
