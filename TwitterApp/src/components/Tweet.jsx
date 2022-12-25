import React from 'react'
import { HiOutlineClock } from "react-icons/hi"
import { FaCommentAlt } from "react-icons/fa"
import { FaRetweet } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"
import { IoReturnUpForward } from "react-icons/io5"

export default function Tweet() {
  return (
    <article>
        <div>
        <img src="#" style={{width:50, height:50}}/>
        </div>
        <div>
            <div>
                <p><b>John Ramsey</b></p>
                <p>@john_ram</p>
                <div>
                    <HiOutlineClock/>
                    <p>2 hours</p>
                </div>
            </div>
            <div>
                <p>Best views from the vacations.</p>
                <div>
                <img src="#" style={{width:80, height:80}}/>
                <img src="#" style={{width:80, height:80}}/>
                <img src="#" style={{width:80, height:80}}/>
                </div>
                <div>
                    <div>
                        <FaCommentAlt/>
                        <p>8</p>
                    </div>
                    <div>
                        <FaRetweet/>
                        <p>12</p>
                    </div>
                    <div>
                        <AiFillHeart/>
                        <p>30</p>
                    </div>
                    <div>
                        <IoReturnUpForward/>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}
