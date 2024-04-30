import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import "./App.css";
import Accordion from "./Faq_open.jsx";
import { CarouselCustomNavigation } from "../Company Page/Carousel_HomePage.jsx";

export default function FAQ() {


  useEffect(() => {
    fetchFAQs();
  }, []);
  const fetchFAQs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/faqs');
      setQuestions(response.data);
      setFilteredQuestions(response.data);
    } catch (error) {
      console.error('Error fetching FAQ data:', error);
    }
  };

  return (

    // parent container
    <div className="w-full bg-white pt-20 flex flex-row overflow-hidden">


{/* faq container */}
        <div className="flex w-[50%] flex-col items-center justify-center"> 
      <div className="w-full flex flex-col items-end justify-center">
            {/* title container */}

      <div className="flex items-center justify-center">
    <h2 className="text-CustomOrange font-bold text-5xl mb-6">Do you have a question?</h2>
    </div>

{/* faq content */}
         <div className="flex flex-col items-end  w-9/12 max-w-9/12">
          {/* <a href="" className="decoration-0 text-CustomOrange">See more</a> */}

          <Link to="./FAQ" className="decoration-0 text-CustomOrange">
        See more
      </Link>


         
          <Accordion>
            </Accordion>
            </div>
      </div>
      </div>

     {/* svg container */}

      <div className="flex flex-col ml-24 items-start justify-center w-[50%] ">

        

{/* <div className="flex items-center justify-center w-full mb-20"> */}
      <svg width="405" height="338" viewBox="0 0 405 338" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M397.24 297.088C395.541 283.805 387.078 270.717 374.053 266.395C379.19 280.067 379.189 295.065 374.05 308.736C372.049 314.002 369.259 319.656 371.142 324.962C372.313 328.264 375.178 330.791 378.381 332.37C381.584 333.95 385.139 334.703 388.649 335.441L389.34 335.997C394.913 323.758 398.938 310.371 397.24 297.088Z" fill="#F0F0F0"/>
<path d="M373.923 266.65C381.508 274.916 386.222 285.296 387.396 296.317C387.692 298.685 387.602 301.084 387.13 303.424C386.595 305.69 385.445 307.775 383.801 309.463C382.301 311.067 380.575 312.538 379.501 314.468C378.967 315.464 378.655 316.559 378.586 317.681C378.517 318.802 378.692 319.925 379.101 320.976C380.049 323.621 381.917 325.776 383.819 327.822C385.932 330.094 388.162 332.421 389.06 335.433C389.169 335.798 389.745 335.612 389.636 335.248C388.074 330.008 382.845 327.031 380.351 322.312C379.187 320.11 378.698 317.553 379.789 315.228C380.743 313.195 382.522 311.677 384.055 310.066C385.684 308.442 386.879 306.456 387.537 304.279C388.13 301.969 388.314 299.578 388.082 297.208C387.648 291.864 386.352 286.619 384.242 281.667C381.867 276.001 378.512 270.773 374.324 266.208C374.065 265.925 373.665 266.369 373.923 266.65Z" fill="white"/>
<path d="M387.232 292.742C389.107 292.299 390.758 291.223 391.892 289.705C393.026 288.188 393.568 286.328 393.422 284.457C393.391 284.079 392.785 284.108 392.816 284.487C392.955 286.228 392.45 287.961 391.391 289.372C390.332 290.783 388.79 291.779 387.042 292.182C386.663 292.269 386.855 292.829 387.232 292.742Z" fill="white"/>
<path d="M384.674 308.75C381.289 306.784 378.79 303.65 377.676 299.971C377.566 299.607 376.99 299.792 377.1 300.156C378.267 303.982 380.874 307.239 384.401 309.277C384.738 309.471 385.009 308.943 384.674 308.75Z" fill="white"/>
<path d="M381.303 276.556C380.614 276.874 379.855 277.021 379.094 276.983C378.333 276.946 377.593 276.725 376.941 276.341C376.608 276.142 376.337 276.671 376.668 276.867C377.391 277.289 378.208 277.532 379.049 277.575C379.89 277.619 380.729 277.461 381.493 277.116C381.568 277.089 381.629 277.036 381.665 276.967C381.701 276.898 381.709 276.818 381.686 276.744C381.66 276.67 381.606 276.608 381.534 276.573C381.462 276.538 381.379 276.532 381.303 276.556Z" fill="white"/>
<path d="M334.352 290.127C334.556 290.257 334.761 290.386 334.966 290.521C337.709 292.275 340.301 294.243 342.716 296.406C342.905 296.57 343.095 296.739 343.279 296.909C349.041 302.179 353.747 308.444 357.157 315.386C358.511 318.149 359.648 321.009 360.556 323.94C361.81 327.988 362.839 332.474 365.322 335.785C365.577 336.133 365.854 336.466 366.151 336.781H388.588C388.639 336.756 388.69 336.736 388.741 336.711L389.637 336.751C389.601 336.596 389.561 336.437 389.525 336.283C389.504 336.193 389.479 336.104 389.458 336.014C389.443 335.954 389.427 335.894 389.417 335.84C389.412 335.82 389.407 335.8 389.402 335.785C389.392 335.73 389.376 335.68 389.366 335.631C389.141 334.739 388.909 333.848 388.67 332.957C388.67 332.952 388.67 332.952 388.665 332.947C386.827 326.16 384.39 319.464 380.986 313.339C380.884 313.155 380.781 312.966 380.669 312.782C379.119 310.03 377.34 307.405 375.35 304.935C374.256 303.586 373.092 302.291 371.864 301.056C368.683 297.871 365.007 295.193 360.971 293.12C352.923 288.987 343.607 287.404 335.007 289.928C334.787 289.993 334.571 290.057 334.352 290.127Z" fill="#F0F0F0"/>
<path d="M334.404 290.392C345.577 292.55 355.766 298.077 363.525 306.189C365.227 307.906 366.64 309.874 367.713 312.02C368.688 314.142 369.061 316.48 368.792 318.791C368.587 320.95 368.12 323.135 368.457 325.305C368.647 326.413 369.076 327.47 369.715 328.406C370.354 329.342 371.189 330.136 372.166 330.736C374.56 332.292 377.386 332.919 380.171 333.439C383.264 334.016 386.486 334.567 389.067 336.446C389.379 336.674 389.724 336.189 389.412 335.961C384.921 332.692 378.903 333.378 373.991 331.07C371.698 329.994 369.726 328.238 369.158 325.743C368.661 323.561 369.141 321.308 369.368 319.123C369.664 316.873 369.389 314.587 368.566 312.464C367.61 310.273 366.277 308.255 364.625 306.499C360.969 302.486 356.688 299.058 351.938 296.339C346.535 293.206 340.62 290.996 334.45 289.803C334.069 289.73 334.024 290.318 334.404 290.392Z" fill="white"/>
<path d="M361.183 303.445C362.406 301.994 363.058 300.168 363.024 298.292C362.99 296.417 362.271 294.614 360.997 293.206C360.738 292.922 360.272 293.3 360.531 293.584C361.72 294.893 362.39 296.573 362.418 298.319C362.446 300.066 361.831 301.765 360.684 303.109C360.436 303.402 360.936 303.736 361.183 303.445Z" fill="white"/>
<path d="M369.042 317.712C365.122 318.125 361.186 317.085 358.02 314.801C357.706 314.574 357.361 315.06 357.674 315.286C360.974 317.657 365.072 318.731 369.15 318.293C369.539 318.251 369.428 317.67 369.042 317.712Z" fill="white"/>
<path d="M346.43 293.982C346.078 294.639 345.563 295.201 344.932 295.617C344.3 296.033 343.573 296.289 342.815 296.364C342.426 296.401 342.537 296.982 342.923 296.945C343.76 296.858 344.563 296.574 345.262 296.116C345.96 295.658 346.533 295.041 346.929 294.318C346.972 294.253 346.989 294.174 346.974 294.098C346.96 294.022 346.916 293.954 346.852 293.907C346.786 293.863 346.705 293.846 346.626 293.86C346.547 293.874 346.477 293.918 346.43 293.982Z" fill="white"/>
<path d="M224.577 50.0935C224.036 50.7496 223.649 51.5131 223.445 52.3302C223.24 53.1473 223.222 53.9981 223.392 54.8227C223.562 55.6473 223.915 56.4256 224.428 57.1028C224.941 57.78 225.6 58.3397 226.359 58.7424L222.9 78.9066L232.883 74.5974L234.637 56.1098C235.248 54.8246 235.353 53.366 234.933 52.0106C234.512 50.6551 233.594 49.4968 232.354 48.7552C231.114 48.0136 229.637 47.7402 228.204 47.9869C226.77 48.2335 225.48 48.9831 224.577 50.0935Z" fill="#9E616A"/>
<path d="M314.384 329.066L306.221 329.065L302.338 298.441L314.386 298.442L314.384 329.066Z" fill="#9E616A"/>
<path d="M316.467 336.762L290.146 336.761V336.437C290.147 333.794 291.226 331.26 293.147 329.391C295.068 327.523 297.674 326.473 300.391 326.473H300.392L316.467 326.473L316.467 336.762Z" fill="#08112F"/>
<path d="M259.611 329.066L251.448 329.065L247.564 298.441L259.612 298.442L259.611 329.066Z" fill="#9E616A"/>
<path d="M261.695 336.762L235.375 336.761V336.437C235.375 333.794 236.455 331.26 238.376 329.391C240.297 327.523 242.903 326.473 245.62 326.473H245.62L261.696 326.473L261.695 336.762Z" fill="#08112F"/>
<path d="M256.209 186.164L253.158 190.067C253.158 190.067 252.882 191.89 248.253 206.74L245.715 318.357H261.072L281.599 229.05L302.904 320.149L316.217 320.913L315.591 217.369C315.591 217.369 317.272 196.068 311.312 192.112C305.352 188.156 256.209 186.164 256.209 186.164Z" fill="#08112F"/>
<path d="M276.806 92.3641C285.707 92.3641 292.921 85.3465 292.921 76.6898C292.921 68.0332 285.707 61.0156 276.806 61.0156C267.906 61.0156 260.691 68.0332 260.691 76.6898C260.691 85.3465 267.906 92.3641 276.806 92.3641Z" fill="#9E616A"/>
<path d="M293.016 79.133L292.75 78.6154C292.339 77.8149 288.931 71.1593 288.504 69.448L284.215 69.9386L273.048 69.9403L274.599 67.6764L270.497 68.1969C268.997 68.3742 267.563 68.8998 266.316 69.7295C265.551 70.2239 264.905 70.8724 264.42 71.6312C262.954 74.0721 260.716 78.0645 260.693 78.1047L260.479 78.4866L258.618 75.4425C258.594 75.3244 256.288 63.6268 264.005 59.6597C264.403 58.8734 267.794 52.689 275.81 53.1064C276.691 52.1295 277.932 51.5294 279.265 51.436C281.095 51.3431 282.995 52.2784 284.904 54.2274C287.438 56.8161 290.91 60.3613 293.01 64.2976L293.589 65.1013C294.412 66.2516 294.819 67.6348 294.748 69.0345C295.194 71.2682 295.035 73.5763 294.288 75.7326L293.016 79.133Z" fill="#2F2E41"/>
<path d="M258.768 108.992L254.839 104.884L233.189 102.499L235.22 70.1553L223.416 61.9648L214.744 107.498L254.805 134.791L258.768 108.992Z" fill="#E4E4E4"/>
<path d="M302.657 207.894C302.495 207.067 302.522 206.217 302.735 205.402C302.948 204.587 303.342 203.827 303.89 203.176C304.438 202.525 305.125 201.999 305.905 201.635C306.684 201.27 307.536 201.077 308.4 201.067L315.066 181.68L321.806 190.039L314.443 207.168C314.363 208.582 313.753 209.918 312.728 210.923C311.703 211.929 310.334 212.533 308.881 212.623C307.429 212.712 305.992 212.28 304.845 211.409C303.698 210.537 302.919 209.286 302.657 207.894Z" fill="#9E616A"/>
<path d="M308.937 109.979L315.518 104.875C315.518 104.875 322.246 108.485 324.294 114.958C326.342 121.43 329.925 158.275 329.925 158.275L320.199 205.576L309.322 198.239L314.568 160.765L305.354 133.38L308.937 109.979Z" fill="#E4E4E4"/>
<path d="M0 93.4805L140.423 103.443V139.304L0 136.768V93.4805Z" fill="#E6E6E6"/>
<path d="M4.42383 132.202L137.357 135.364V107.117L4.42383 98.4453V132.202Z" fill="white"/>
<path d="M33.6024 104.227C35.1372 104.323 36.6318 104.744 37.982 105.46C39.3362 106.18 40.5376 107.144 41.5222 108.3C42.5455 109.496 43.347 110.856 43.8908 112.319C44.4646 113.858 44.7574 115.483 44.756 117.121C44.762 118.733 44.4689 120.334 43.8908 121.845C43.3546 123.249 42.551 124.542 41.5222 125.656C40.5344 126.727 39.3289 127.586 37.982 128.181C36.6068 128.781 35.1092 129.07 33.6024 129.024C32.0604 128.976 30.5482 128.598 29.1735 127.917C27.7811 127.225 26.5401 126.276 25.5195 125.123C24.4486 123.918 23.6079 122.537 23.0371 121.044C22.4314 119.468 22.1218 117.798 22.1232 116.115C22.1164 114.457 22.4263 112.813 23.0371 111.265C23.6006 109.835 24.4439 108.526 25.5201 107.408C26.5452 106.344 27.7906 105.503 29.1741 104.94C30.5749 104.377 32.0897 104.133 33.6024 104.227Z" fill="#E6E6E6"/>
<path d="M59.7539 113.098L124.453 116.377V118.761L59.7539 115.703V113.098Z" fill="#E6E6E6"/>
<path d="M59.7539 119.871L124.453 122.573V124.956L59.7539 122.476V119.871Z" fill="#E6E6E6"/>
<path d="M0 166.333L140.423 163.797V199.658L0 209.62V166.333Z" fill="#E6E6E6"/>
<path d="M4.42383 204.654L137.357 195.982V167.738L4.42383 170.901V204.654Z" fill="white"/>
<path d="M22.1287 186.418C22.1969 184.736 22.5756 183.08 23.2468 181.529C23.8771 180.067 24.773 178.727 25.8918 177.575C26.9565 176.473 28.2332 175.586 29.6493 174.963C31.05 174.349 32.5732 174.047 34.109 174.076C35.6161 174.106 37.0965 174.469 38.4385 175.137C39.7581 175.799 40.9237 176.718 41.8632 177.836C42.843 179.001 43.5909 180.334 44.0686 181.765C44.583 183.304 44.81 184.919 44.7387 186.536C44.6741 188.172 44.3159 189.784 43.6803 191.3C43.079 192.737 42.2231 194.06 41.1515 195.209C40.1223 196.318 38.8836 197.224 37.5029 197.878C36.1241 198.528 34.6148 198.876 33.0824 198.895C31.565 198.913 30.0636 198.592 28.6932 197.958C27.3353 197.324 26.1292 196.42 25.153 195.305C24.1264 194.132 23.3405 192.779 22.838 191.319C22.2938 189.742 22.0534 188.08 22.1287 186.418Z" fill="#E6E6E6"/>
<path d="M59.7539 180.624L124.453 178.145V180.528L59.7539 183.229V180.624Z" fill="#E6E6E6"/>
<path d="M59.7539 187.401L124.453 184.344V186.727L59.7539 190.007V187.401Z" fill="#E6E6E6"/>
<path d="M403.573 337.272H208.537C208.402 337.272 208.271 337.22 208.175 337.127C208.079 337.033 208.025 336.907 208.025 336.775C208.025 336.643 208.079 336.516 208.175 336.423C208.271 336.33 208.402 336.277 208.537 336.277H403.573C403.709 336.277 403.839 336.33 403.935 336.423C404.031 336.516 404.085 336.643 404.085 336.775C404.085 336.907 404.031 337.033 403.935 337.127C403.839 337.22 403.709 337.272 403.573 337.272Z" fill="#CACACA"/>
<path d="M189.733 77.6304C211.695 77.6304 229.498 60.2522 229.498 38.8152C229.498 17.3782 211.695 0 189.733 0C167.772 0 149.969 17.3782 149.969 38.8152C149.969 60.2522 167.772 77.6304 189.733 77.6304Z" fill="#599EF3"/>
<path d="M188.966 65.5368C191.55 65.5368 193.645 63.4919 193.645 60.9696C193.645 58.4472 191.55 56.4023 188.966 56.4023C186.382 56.4023 184.287 58.4472 184.287 60.9696C184.287 63.4919 186.382 65.5368 188.966 65.5368Z" fill="white"/>
<path d="M188.464 13.305C184.937 13.3392 181.562 14.7156 179.059 17.1414C176.555 19.5672 175.121 22.8508 175.06 26.2934C175.059 26.3593 175.059 26.8227 175.059 27.4287C175.059 28.3173 175.42 29.1694 176.064 29.7978C176.708 30.4261 177.581 30.7791 178.491 30.7792C179.402 30.7791 180.275 30.4256 180.919 29.7967C181.563 29.1678 181.925 28.3149 181.925 27.4257V27.4236C181.925 27.0113 181.924 26.726 181.924 26.7085C181.924 25.6054 182.218 24.5213 182.777 23.5627C183.336 22.6041 184.142 21.8042 185.114 21.2415C186.086 20.6789 187.191 20.3729 188.321 20.3537C189.451 20.3345 190.566 20.6027 191.558 21.132C192.549 21.6613 193.382 22.4334 193.976 23.3723C194.569 24.3113 194.901 25.3848 194.94 26.4872C194.979 27.5896 194.724 28.683 194.199 29.6598C193.674 30.6365 192.897 31.463 191.945 32.058L191.947 32.0594C191.947 32.0594 187.061 35.1293 185.572 39.3407L185.573 39.341C185.311 40.2037 185.179 41.0989 185.179 41.9987C185.179 42.3686 185.202 45.6049 185.245 48.2317C185.26 49.1381 185.639 50.0023 186.301 50.638C186.963 51.2736 187.855 51.6298 188.783 51.6296C189.248 51.6296 189.708 51.5402 190.138 51.3665C190.567 51.1929 190.957 50.9384 191.286 50.6176C191.615 50.2968 191.875 49.9159 192.053 49.4967C192.231 49.0776 192.323 48.6283 192.323 48.1746L192.322 48.1535C192.307 45.7478 192.299 42.9467 192.299 42.7433C192.299 40.1574 194.855 37.581 196.954 35.9007C199.384 33.9798 201.092 31.3257 201.81 28.355C201.965 27.7427 202.05 27.1156 202.064 26.4851C202.064 24.7542 201.715 23.0403 201.036 21.4412C200.358 19.842 199.363 18.3891 198.109 17.1651C196.855 15.9412 195.367 14.9704 193.729 14.308C192.09 13.6456 190.335 13.3047 188.561 13.3047C188.529 13.3047 188.496 13.3048 188.464 13.305Z" fill="white"/>
<path d="M289.083 95.3125L298 100.106L315.516 104.877L310.288 149.462L311.239 193.379C311.239 193.379 281.589 213.135 253.158 190.063V134.783L254.84 104.877C254.84 104.877 261.644 102.997 265.069 106.24L271.567 98.0307L289.083 95.3125Z" fill="#E4E4E4"/>
</svg>
{/* </div> */}

<button class="bg-customLBlue transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out text-white py-2 px-48 m-2 rounded-lg ">
Apply Now
</button>

      </div>



    </div>
  );
}