import React from 'react'

function Footer() {
  return (
      <footer className="w-full bg-[#0c0f1a] py-8">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 items-center">

              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="Brand 1"
                  className="h-10 opacity-70 hover:opacity-100 transition"
              />

           
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="Brand 2"
                  className="h-10 opacity-70 hover:opacity-100 transition"
              />

            
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                  alt="Brand 3"
                  className="h-10 opacity-70 hover:opacity-100 transition"
              />

             
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Chrome_icon_%28September_2014%29.svg"
                  alt="Brand 4"
                  className="h-10 opacity-70 hover:opacity-100 transition"
              />

          </div>
      </footer>

  )
}

export default Footer