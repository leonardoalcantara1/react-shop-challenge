import React, { FC } from 'react';

interface LogoProps {
  width: number,
  height: number,
  color: string,
  className: string
}

const Logo: FC<any> = ({ width, height, color, className }: LogoProps) => (
  <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 944.7 500" width={width} height={height} className={className}>
    <path d="M144.1,386.6h-10.9c-3.4,0-5.5-1.7-6.7-3.8c-1.7-2.9-4.2-2.9-5.9-1.7c-7.6,4.6-19.8,9.7-36.6,9.7
      c-41.6,0-69.3-31.9-69.3-68.1c0-36.1,27.7-68.1,69.3-68.1c10.9,0,22.3,2.5,31.1,6.7c3.4,1.7,5.9-0.8,5.9-5c0-18.9-13.4-38.2-37-38.2
      c-14.7,0-26.5,4.2-34.9,8.8c-5.5,2.9-8.8,0.8-11.8-4.2l-5.5-9.7c-2.9-5.5,0.8-10.5,4.6-12.6c13.4-7.6,29-12.2,47.5-12.2
      c41.6,0,69.3,31.9,69.3,68.1v121C153.4,383.2,150,386.6,144.1,386.6L144.1,386.6z M84,284.5c-23.5,0-37,19.3-37,38.2
      c0,18.9,13.5,38.2,37,38.2c23.5,0,37-19.3,37-38.2C121,303.8,107.6,284.5,84,284.5L84,284.5z M346.3,202.1l-52.1,172.7
      c-2.5,8.4-7.1,16-16,16s-13.4-7.6-16-16l-52.1-172.7c-1.3-4.6,2.1-9.7,8.8-9.7h13.9c4.6,0,9.2,3.8,10.9,9.2l30.7,106.8
      c0.8,2.9,1.7,5.5,3.8,5.5c2.1,0,2.9-2.5,3.8-5.5l30.7-106.8c1.7-5.5,6.3-9.2,10.9-9.2h13.9C343.3,192.4,347.6,197.5,346.3,202.1
      L346.3,202.1z M532.5,386.6h-11.8c-5.9,0-9.2-3.4-9.2-9.2V229.8c0-7.1-3.8-13-12.2-13c-8.4,0-12.2,5.9-12.2,13v119.8
      c0,5.9-3.4,9.2-9.2,9.2h-10.9c-5.9,0-9.2-3.4-9.2-9.2V229.8c0-7.1-3.8-13-12.2-13c-8.4,0-12.2,5.9-12.2,13v147.5
      c0,5.9-3.4,9.2-9.2,9.2h-11.8c-5.9,0-9.2-3.4-9.2-9.2V229.8c0-24.8,13-41.6,41.6-41.6c8.8,0,16.8,2.5,23.5,6.3
      c3.8,2.1,4.6,2.1,8.4,0c6.7-3.8,14.7-6.3,23.5-6.3c28.6,0,41.6,16.8,41.6,41.6v147.5C541.7,383.2,538.4,386.6,532.5,386.6
      L532.5,386.6z M666.5,390.8c-41.6,0-69.3-31.9-69.3-68.1v-66.4c0-36.1,27.7-68.1,69.3-68.1c41.6,0,69.3,31.9,69.3,68.1v66.4
      C735.9,358.9,708.2,390.8,666.5,390.8L666.5,390.8z M703.5,256.3c0-18.9-13.5-38.2-37-38.2c-23.5,0-37,19.3-37,38.2v66.4
      c0,18.9,13.4,38.2,37,38.2c23.5,0,37-19.3,37-38.2V256.3L703.5,256.3z M912,285.7c-2.9,2.1-2.9,4.6,0,6.7
      c5.9,4.6,18.1,16.4,18.1,38.7c0,37.8-27.7,59.7-69.3,59.7s-69.3-31.9-69.3-68.1V118.4c0-5.9,3.4-9.2,9.2-9.2h13.9
      c5.9,0,9.2,3.4,9.2,9.2v72.7c0,3.4,2.9,5.5,6.7,3.8c10.1-4.2,20.2-6.7,30.3-6.7c41.6,0,69.3,21.9,69.3,59.7
      C930.1,270.2,917.9,281.1,912,285.7L912,285.7z M856.1,275.6c15.1,0,41.6-4.2,41.6-27.7c0-20.2-16.4-29.8-37-29.8
      c-23.5,0-37,19.3-37,38.2v66.4c0,18.9,13.4,38.2,37,38.2c20.6,0,37-9.7,37-29.8c0-23.5-26.5-27.7-41.6-27.7c-5.9,0-9.2-3.4-9.2-9.2
      v-9.2C846.8,279,850.2,275.6,856.1,275.6L856.1,275.6z" fill={color} />
  </svg>
)

export default Logo;