// eslint-disable-next-line no-unused-vars
import React from 'react'
import { truncate } from "lodash";

import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";

const Card = ({val}) => {
  return (
    <>
        <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                  <div className="flex items-center justify-center">
                    <img
                      src={val.img}
                    //   alt={`img/story/${i}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg hover:-translate-y-1 transitions-theme" 
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs  font-bold text-blue-600">
                        {val.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">
                      {val.title}
                    </h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      href={val.url}
                      target="_blank"
                      role={"button"}
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme hover:-translaw-[1.5%] transitions-theme"
                    >
                      {val.btn}
                    </a>
                  </div>
                </div>
    </>
  )
}

export default Card