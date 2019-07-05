// React is installed in the studio and should be treated as a peer dependency
import React from 'react'

// We recommend using SVGs as they have both a small footprint and scale well
const st0 = {
  fill: "#FFFFFF",
}

const st1 = {
  fill: "#29ABE2"
}

const Logo = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 250 100">
    <polyline style={st0} points="32,5 32,94 63.5,92.9 49.4,51.7 91.7,51.7 87.4,92.9 108,92.9 108,5 81.9,5 91.7,45.2 48.3,45.2 "/>
    <polygon style={st1} points="116.7,5 116.7,92.9 125.3,92.9 125.3,12.6 "/>
    <path style={st1} d="M125.3,12.6c0,0,60.8,41.2,30.4,60.8s-30.4,19.5-30.4,19.5s86.8-20.6,39.1-54.3S131.9,5,131.9,5h-15.2"/>
    <path style={st1} d="M223,7.2c0,0-68.4,9.8-39.1,33.6c0,0,25,15.2,11.9,28.2s-21.7,8.7-21.7,8.7s-7.6,14.1,3.3,14.1
      s38.5-20,34.7-32.6c-3.3-10.9-10.9-16.3-18.5-21.7c-7.1-5-1.1-10.9-1.1-10.9s7.6-9.8,29.3-5.4C221.9,21.3,226.3,10.4,223,7.2z"/>
  </svg>
)

export default Logo
