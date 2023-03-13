import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const commentsList = [
  {
    name: "Nikhil Naik",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            name: "Nikhil Naik",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
              {
                name: "Nikhil Naik",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [
                  {
                    name: "Nikhil Naik",
                    comment:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            name: "Nikhil Naik",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
              {
                name: "Nikhil Naik",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [],
              },
            ],
          },
          {
            name: "Nikhil Naik",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Nikhil Naik",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            name: "Nikhil Naik",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
              {
                name: "Nikhil Naik",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [
                  {
                    name: "Nikhil Naik",
                    comment:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
    ],
  },
  {
    name: "Nikhil Naik",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [
          {
            name: "Nikhil Naik",
            comment:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [],
          },
        ],
      },
    ],
  },

  {
    name: "Nikhil Naik",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
    ],
  },
  {
    name: "Nikhil Naik",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [],
  },
  {
    name: "Nikhil Naik",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    replies: [
      {
        name: "Nikhil Naik",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: [],
      },
    ],
  },
];
const Comments = ({ name, comment, replies }) => {
  return (
    <div className="px-2 my-1  mx-1    ">
      <div className="flex">
        <FaUserCircle className="m-1" />
        <p className="font-bold">{name}</p>
      </div>
      <p>{comment}</p>
      <div className="flex">
        <AiOutlineLike
          className="m-1 cursor-pointer hover:bg-slate-300 rounded-full"
          size={20}
        />
        <AiOutlineDislike
          className="m-1 cursor-pointer hover:bg-slate-300 rounded-full"
          size={20}
        />
        <p className="bg-slate-300 p-1 rounded-lg hover:bg-slate-400 cursor-pointer">
          Reply
        </p>
      </div>
      <div className="p-2 m-1 border border-l-black rounded-md">
        {replies.map((item) => (
          <Comments {...item} />
        ))}
      </div>
    </div>
  );
};

const CommentsSection = () => {
  return (
    <div>
      <p className="p-2 m-2 font-bold border-b-2 ">Comments</p>
      <div>
        {commentsList.map((item) => (
          <Comments {...item} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
