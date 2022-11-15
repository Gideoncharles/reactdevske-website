import React from 'react';

export default function DesktopVersion() {
  return (
    <>
      <h1 className="hidden lg:block font-montserrat text-[32px] font-[900] w-fit mx-auto py-4">
        Have an interesting idea we should discuss?
      </h1>
      <div className="w-3/4 lg:bg-[#CEEDF4BF] dark:bg-slate-800  mx-auto pt-[74px] pb-[46px] rounded-[10px]">
        <form className="mx-auto w-2/4">
          <label
            htmlFor="name"
            className="block mb-2 text-xs text-black/[0.44] font-dmSans dark:text-white"
          >
            Name
          </label>
          <input
            id="name"
            type={'text'}
            placeholder={'Jane Doe'}
            className="border dark:bg-slate-900 border-[#CEEDF4] dark:border-[#4C566A] w-full rounded-lg px-4 py-3 mb-5 placeholder-[#7E7979] dark:placeholder-[#D8DEE9] outline-none font-montserrat text-base"
            required
          />
          <label
            htmlFor="email"
            className="block mb-2 text-xs text-black/[0.44] font-dmSans dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            type={'email'}
            placeholder={'you@example.com'}
            className="border dark:bg-slate-900 border-[#CEEDF4] dark:border-[#4C566A] w-full rounded-lg px-4 py-3 mb-5 outline-none placeholder-[#7E7979] dark:placeholder-[#D8DEE9] font-montserrat text-base"
            required
          />
          <label
            htmlFor="message"
            className="block mb-2 text-xs text-black/[0.44] font-dmSans dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hello, I'm getting in touch ..."
            className="border dark:bg-slate-900 border-[#CEEDF4] dark:border-[#4C566A] w-full rounded-lg px-4 py-[22px] mb-9 h-[178px] resize-none outline-none placeholder-[#7E7979] dark:placeholder-[#D8DEE9] font-montserrat text-base"
            required
          />
          {/*//TODO: replace this button with the app button component */}
          <button
            type="submit"
            className="block rounded-md p-2 my-2 w-[247px] h-14 mx-auto bg-[#EC0505] text-white font-bold font-montserrat"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
