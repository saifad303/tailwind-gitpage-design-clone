import React, { useEffect, useState } from "react";
import Svg from "./Svg";
import Svg_ from "./Svg_";
import Code from "./Svg__";
import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";

import {
  BiBell,
  BiPlus,
  BiCaretDown,
  BiStar,
  BiGitRepoForked,
  BiChat,
  BiPlayCircle,
  BiGitBranch,
  BiPurchaseTag,
  BiCheck,
} from "react-icons/bi";
import { FiEye, FiFile } from "react-icons/fi";
import {
  AiOutlineExclamationCircle,
  AiOutlinePullRequest,
  AiOutlineClockCircle,
  AiFillFolder,
  AiOutlineUnorderedList,
  AiFillGithub,
} from "react-icons/ai";
import { HiOutlineShieldExclamation, HiDownload } from "react-icons/hi";
import { BsGraphUp, BsBook } from "react-icons/bs";
import { GrFormAttachment } from "react-icons/gr";
import { FaBalanceScale } from "react-icons/fa";
import TailwindMd from "./Tailwind.md";
import axios from "axios";

function App() {
  let [terms, setTerms] = useState(null);

  useEffect(() => {
    axios.get(TailwindMd).then((res) => {
      console.log(res.data);
      setTerms(res.data);
    });
  }, []);

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  };

  return (
    <>
      <div className="text-sm">
        <nav className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <Svg />
            </a>
            <div className="relative">
              <input
                type="text"
                className="rounded bg-gray-700 placeholder-white w-72 px-3 py-1"
                placeholder="Search or jump to..."
              />
              <div className="absolute top-0 right-0 flex items-center h-full">
                <div className="border border-gray-600 rounded text-xm text-gray-400 px-2 mr-2">
                  /
                </div>
              </div>
            </div>
            <ul className="flex items-center space-x-4 font-semibold">
              <li>
                <a href="" className="hover:text-gray-400">
                  Pull request
                </a>
              </li>
              <li>
                <a href="">Issues</a>
              </li>
              <li>
                <a href="">Marketplace</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-3">
            <a href="" className="relative hover:text-gray-400">
              <BiBell size={25} />
              <div className="absolute bg-blue-700 rounded-full h-2 w-2 top-0 right-0"></div>
            </a>
            <a href="" className="flex items-center">
              <BiPlus size={15} />
              <BiCaretDown size={15} />
            </a>
            <a href="" className="flex items-center">
              <img
                src="https://via.placeholder.com/150/771796"
                className="w-5 h5 rounded-full"
                alt=""
              />
              <BiCaretDown size={15} />
            </a>
          </div>
        </nav>
        <div className="flex items-center justify-between bg-gray-50 text-gray-600 px-8 py-4">
          <div className="flex">
            <Svg_ />
            <div className="flex items-center text-xl px-2 py-2">
              <a href="" className="text-blue-600 hover:underline">
                tailwindlabs
              </a>
              <span className="ml-1">/</span>
              <a href="" className="ml-1 text-blue-600 font-semibold">
                tailwindcss
              </a>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex">
              <button className=" bg-gray-50 border space-x-1 border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center">
                <FiEye size={16} className="text-gray-600" />
                <div className=" font-semibold text-gray-900 ">Watch</div>
                <BiCaretDown className="text-gray-900" />
              </button>
              <a
                href=""
                className="border border-gray-400 border-l-0 rounded rounded-l-none px-3 py-1 font-semibold text-gray-900 hover:text-blue-800"
              >
                528
              </a>
            </div>
            <div className="flex">
              <button className=" bg-gray-50 border space-x-1 border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center">
                <BiStar size={16} className="text-gray-600" />
                <div className=" font-semibold text-gray-900 ">Star</div>
                <BiCaretDown className="text-gray-900" />
              </button>
              <a
                href=""
                className="border border-gray-400 border-l-0 rounded rounded-l-none px-3 py-1 font-semibold text-gray-900 hover:text-blue-800"
              >
                41k
              </a>
            </div>
            <div className="flex">
              <button className=" bg-gray-50 border space-x-1 border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center">
                <BiGitRepoForked size={16} className="text-gray-600" />
                <div className=" font-semibold text-gray-900 ">Fork</div>
                <BiCaretDown className="text-gray-900" />
              </button>
              <a
                href=""
                className="border border-gray-400 border-l-0 rounded rounded-l-none px-3 py-1 font-semibold text-gray-900 hover:text-blue-800"
              >
                9.1k
              </a>
            </div>
          </div>
        </div>
        <ul className="flex items-center space-x-2 justify-start bg-gray-50 text-lg border-b border-gray-400 px-8  ">
          <li className="font-semibold">
            <a
              href=""
              className="flex items-center border-b-2 border-red-500 px-4 pb-3 space-x-2"
            >
              <Code />
              <span className="">Code</span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href=""
              className="flex items-center font-normal border-transparent border-b-2 hover:border-gray-500 transition ease-in-out duration-150 px-4 pb-3 space-x-2"
            >
              <AiOutlineExclamationCircle
                size={22}
                className=" text-gray-500"
              />
              <span>Issues</span>
              <span className="text-base border font-semibold border-gray-200 px-2 rounded-full bg-gray-200">
                84
              </span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href=""
              className="flex items-center font-normal border-transparent border-b-2 hover:border-gray-500 transition ease-in-out duration-150 px-4 pb-3 space-x-2"
            >
              <AiOutlinePullRequest size={22} className=" text-gray-500" />
              <span>Pull request</span>
              <span className="text-base border font-semibold border-gray-200 px-2 rounded-full bg-gray-200">
                32
              </span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href=""
              className="flex items-center font-normal border-transparent border-b-2 hover:border-gray-500 transition ease-in-out duration-150 px-4 pb-3 space-x-2"
            >
              <BiChat size={22} className=" text-gray-500" />
              <span>Discussions</span>
              <span className="text-base border font-semibold border-gray-200 px-2 rounded-full bg-gray-200">
                32
              </span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href=""
              className="flex items-center font-normal border-transparent border-b-2 hover:border-gray-500 transition ease-in-out duration-150 px-4 pb-3 space-x-2"
            >
              <HiOutlineShieldExclamation
                size={22}
                className=" text-gray-500"
              />
              <span>Security</span>
            </a>
          </li>
          <li className="font-semibold">
            <a
              href=""
              className="flex items-center font-normal border-transparent border-b-2 hover:border-gray-500 transition ease-in-out duration-150 px-4 pb-3 space-x-2"
            >
              <BsGraphUp size={22} className=" text-gray-500" />
              <span>Insight</span>
            </a>
          </li>
        </ul>
        <div className="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
          <div className="file-explorer-container w-full lg:w-3/4 lg:mr-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-gray-900 text-base border border-gray-300 rounded-md px-3 py-1 bg-gray-50">
                  <BiGitBranch size={16} />
                  <div className=" font-semibold ">master</div>
                  <BiCaretDown size={13} />
                </button>
                <a
                  href=""
                  className="flex items-center space-x-1 text-base group text-gray-500 px-3 py-1"
                >
                  <BiGitBranch
                    size={16}
                    className="group-hover:text-blue-600 text-gray-800"
                  />
                  <span className="font-semibold group-hover:text-blue-600 text-gray-800">
                    34
                  </span>
                  <span className="group-hover:text-blue-600">branches</span>
                </a>
                <a
                  href=""
                  className="flex items-center space-x-1 text-base group text-gray-500 px-3 py-1"
                >
                  <BiPurchaseTag
                    size={16}
                    className="group-hover:text-blue-600 text-gray-800"
                  />
                  <span className="font-semibold group-hover:text-blue-600 text-gray-800">
                    151
                  </span>
                  <span className="group-hover:text-blue-600">tags</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-gray-900 text-sm border border-gray-300 rounded-md px-4 py-1 bg-gray-50">
                  <div className=" font-semibold ">Go to file</div>
                </button>
                <button className="flex items-center space-x-1 text-gray-900 text-sm border border-gray-300 rounded-md px-4 py-1 bg-gray-50">
                  <div className=" font-semibold ">Add file</div>
                  <BiCaretDown size={13} />
                </button>
                <button className="flex items-center space-x-1 text-gray-900 text-sm border border-gray-300 rounded-md px-4 py-1 bg-green-600">
                  <HiDownload size={16} color="white" />
                  <div className=" font-semibold text-white">Code</div>
                  <BiCaretDown size={13} color="white" />
                </button>
              </div>
            </div>
            <div className="bg-blue-100 rounded-md rounded-b-none border border-b-0 border-blue-200 flex items-center justify-between px-4 py-4 mt-5">
              <div className="flex items-center space-x-2">
                <img
                  src="https://avatars.githubusercontent.com/in/715?s=48&v=4"
                  className="w-7 rounded mr-1"
                  alt=""
                />
                <a href="" className="font-semibold hover:underline">
                  depfu
                </a>
                <a href="" className=" hover:underline hover:text-blue-600">
                  Update postcss to version 8.2.13
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600">
                <BiCheck size={20} color="green" />
                <a href="" className=" hover:underline hover:text-blue-600">
                  d76c55a
                </a>
                <a
                  href=""
                  className=" hover:underline hover:text-blue-600 text-sm"
                >
                  22 hours ago
                </a>
                <a href="" className="flex items-center space-x-1 group">
                  <AiOutlineClockCircle
                    size={20}
                    className="text-gray-900 group-hover:text-blue-600"
                  />
                  <span className=" text-base font-semibold text-gray-900 group-hover:text-blue-600">
                    3,703
                  </span>
                  <span className="text-sm group-hover:text-blue-600">
                    commits
                  </span>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border border-t-0 border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-blue-400" size={20} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  .github
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-blue-400" size={20} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  dift
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-blue-400" size={20} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  jest
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-blue-400" size={20} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  perf
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-blue-400" size={20} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  script
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <AiFillFolder className="text-blue-400" size={20} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  src
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <FiFile className="text-gray-400" size={18} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  .github
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 border-t-0 bg-gray-50 border border-gray-300 hover:bg-gray-200">
              <div className="flex items-center space-x-3">
                <FiFile className="text-gray-400" size={18} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  .github
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border rounded-b-md border-gray-300 hover:bg-gray-200 border-t-0">
              <div className="flex items-center space-x-3">
                <FiFile className="text-gray-400" size={18} />
                <a href="" className=" hover:underline hover:text-blue-600 ">
                  .github
                </a>
              </div>
              <div>
                <a
                  href=""
                  className="text-gray-600 hover:underline hover:text-blue-600 text-sm"
                >
                  Update 1.bug_report.yml
                </a>
              </div>
              <div>
                <a href="" className="text-gray-600 ">
                  14 days ago
                </a>
              </div>
            </div>
            <div className=" border border-gray-100 px-2 py-2 mt-5 text-gray-600 rounded-md rounded-b-none">
              <div className="flex items-center space-x-2">
                <a
                  href=""
                  className="border border-white px-2 py-2 rounded-md hover:bg-gray-300"
                >
                  <AiOutlineUnorderedList size={18} />
                </a>
                <span className="font-semibold">README.md</span>
              </div>
              <hr className="mt-2 mb-3" />
              <div>
                <span className="prose max-width-none">
                  <ReactMarkdown rehypePlugins={[RehypeRaw]}>
                    {terms}
                  </ReactMarkdown>
                </span>
              </div>
            </div>
          </div>
          <div className="sidebar w-full lg:w-1/4">
            <div className="hidden lg:block">
              <div className="pb-6">
                <span className=" font-semibold text-base">About</span>
              </div>
              <div className="pb-6">
                <span className="text-sm">
                  A utility-first CSS framework for rapid UI development.
                </span>
              </div>
              <div className="flex items-center space-x-1 pb-2">
                <GrFormAttachment size={25} />
                <a
                  href=""
                  className="text-blue-600 mt-1 font-semibold text-base hover:underline"
                >
                  tailwindcss.com/
                </a>
              </div>
              <div className="flex content-start flex-wrap mb-5">
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  css
                </a>
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  postcss
                </a>
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  responsive
                </a>
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  css-framework
                </a>
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  funstional-css
                </a>
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  utility-classes
                </a>
                <a
                  href=""
                  className="border border-transparent mt-1 hover:bg-blue-200 mr-1 rounded-full bg-blue-100 text-blue-700 px-2 py-1 text-xs font-semibold"
                >
                  tailwindcss
                </a>
              </div>
              <a
                href=""
                className="flex space-x-3 text-base text-gray-400 mb-4 group w-24"
              >
                <BsBook
                  size={18}
                  className="text-gray-700 mt-1 group-hover:text-blue-600"
                />
                <span className="text-gray-700 group-hover:text-blue-600">
                  Read me
                </span>
              </a>
              <a
                href=""
                className="flex space-x-3 text-base text-gray-400 group mb-6 w-28"
              >
                <FaBalanceScale
                  size={18}
                  className="text-gray-700 mt-1 group-hover:text-blue-600"
                />
                <span className="text-gray-700 group-hover:text-blue-600">
                  MI License
                </span>
              </a>
              <hr className="mb-6" />
            </div>

            <a href="" className="flex items-center space-x-2 mb-5 md:mt-6">
              <span className=" font-semibold text-gray-600 text-base">
                Releases
              </span>
              <span className="text-xs text-gray-700 font-semibold border border-gray-200 px-2 rounded-full bg-gray-200">
                151
              </span>
            </a>
            <div className="group mb-4">
              <a
                href=""
                className="flex items-center space-x-2 group-hover:text-blue-600"
              >
                <BiPurchaseTag
                  size={16}
                  className="group-hover:text-blue-600 text-green-600"
                />
                <span className="font-semibold text-gray-800 text-base group-hover:text-blue-600">
                  v2.1.2
                </span>
                <span className="text-xs text-green-700 border-2 font-semibold border-green-400 px-2  rounded-full bg-white">
                  Latest
                </span>
              </a>
              <span className="text-xs text-gray-600 pl-6 cursor-pointer group-hover:text-blue-600">
                11 days ago
              </span>
            </div>
            <a href="" className="text-xs text-blue-600 hover:underline">
              + 150 releases
            </a>
            <hr className="mt-8 mb-8" />
            <div>
              <span className="text-lg font-semibold mb-5 inline-block">
                Packages
              </span>
              <br />
              <span className="text-sm text-gray-500">
                No packages published
              </span>
            </div>
            <hr className="mt-8 mb-8" />
            <div>
              <a href="" className="flex items-center space-x-2 mb-5">
                <span className=" font-semibold text-gray-800 text-lg">
                  Used by
                </span>
                <span className="text-sm text-gray-700 font-semibold border border-gray-200 px-2 rounded-full bg-gray-200">
                  191k
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4].map(() => {
                return (
                  <a href="">
                    <img
                      src="https://via.placeholder.com/150/771796"
                      className="w-8 rounded-full"
                      alt=""
                    />
                  </a>
                );
              })}
              <a href="" className="ml-4 text-blue-600 hover:underline">
                + 191,000
              </a>
            </div>
            <hr className="mt-8 mb-8" />
            <div>
              <a href="" className="flex items-center space-x-2 mb-5">
                <span className=" font-semibold text-gray-800 text-lg">
                  Contributed
                </span>
                <span className="text-sm text-gray-700 font-semibold border border-gray-200 px-2 rounded-full bg-gray-200">
                  191
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4].map(() => {
                return (
                  <a href="">
                    <img
                      src="https://via.placeholder.com/150/771796"
                      className="w-8 rounded-full"
                      alt=""
                    />
                  </a>
                );
              })}
              <a href="" className="ml-4 text-blue-600 hover:underline">
                + 191
              </a>
            </div>
            <hr className="mt-8 mb-8" />
            <div className="mb-6">
              <span className="text-lg text-gray-800 font-semibold">
                Lenguages
              </span>
            </div>
            <div className="mb-4">
              <div className="bg-gray-600 rounded-full flex items-center">
                <div className="h-2 w-9/12 rounded-r-none rounded-full bg-yellow-400"></div>
                <div className="h-2 w-3/12 rounded-full rounded-l-none bg-purple-400"></div>
              </div>
            </div>
            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-800 font-semibold">
                  Javascript 85.1%
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-800 font-semibold">
                  CSS 11.1%
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-8 mt-8 w-10/12 mx-auto" />
        <div className="container mx-auto px-4 mb-10 flex items-center justify-between text-xs text-blue-600">
          <div className="w-5/12">
            <ul className="flex items-center space-x-12">
              <li>
                <a href="" className="text-gray-600">
                  © 2021 GitHub, Inc.
                </a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
              <li>
                <a href="">Status</a>
              </li>
              <li>
                <a href="">Docs</a>
              </li>
            </ul>
          </div>
          <div className="w-1/12 flex justify-center">
            <a href="">
              <AiFillGithub
                size={30}
                className="text-gray-200 hover:text-gray-500"
              />
            </a>
          </div>
          <div className="w-5/12">
            <ul className="flex items-center justify-end space-x-12">
              <li>
                <a href="" className="text-gray-600">
                  © 2021 GitHub, Inc.
                </a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
              <li>
                <a href="">Status</a>
              </li>
              <li>
                <a href="">Docs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
