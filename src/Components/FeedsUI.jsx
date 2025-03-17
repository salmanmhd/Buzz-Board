import React, { useContext } from "react";
import { PostContext } from "../postContextApi/PostContext";
import Post from "./Post";
import { Link } from "react-router-dom";
import { LuFile } from "react-icons/lu";
import { RiUserShared2Line } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import Navbar from "./Navbar";
const FeedsUI = () => {
  const { Allposts } = useContext(PostContext);

  return (
    <>
      {/* nav component */}
      <Navbar></Navbar>

      {/* main feed ui */}
      <main className="main h-[calc(100vh-60px)] grid grid-cols-12 gap-3">
        {/* profile ui */}
        <aside className="left-nav  h-[calc(100vh-60px)] col-span-3 hidden lg:block">
          <div className="profile-card">
            <img
              src="https://picsum.photos/seed/1/200/300"
              className="background-image"
            />
            <div className="profile_img">
              <img
                src="https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg"
                alt="profile_img"
              />
              <h1 className="text-center font-bold">Joseph</h1>
              <h1 className="text-center font-normal">@Joseph</h1>
            </div>
          </div>

          <div className="profileActivity">
            <div className="activity">
              <div className="activity_count">
                <p className="font-bold text-xl">12</p>
                <p>Posts</p>
              </div>
              <LuFile />
            </div>
            <div className="activity">
              <div className="activity_count">
                <p className="font-bold text-xl">100</p>
                <p>Followers</p>
              </div>
              <RiUserShared2Line />
            </div>
            <div className="activity">
              <div className="activity_count">
                <p className="font-bold text-xl">50</p>
                <p>Following</p>
              </div>
              <GrGroup />
            </div>
          </div>

          <div className="buttons">
            <button>View Profile </button>
            <button>
              <IoNotificationsOutline /> Notifications
            </button>
          </div>
        </aside>

        {/* post ui */}
        <section className="feed-post bg-white h-full col-span-12 lg:col-span-6 overflow-y-auto p-4 custom-scrollbar items-center">
          {/* create post div */}
          <div className="create-post-section">
            <div className="create-post-input">
              <img src="https://picsum.photos/seed/1/200/300" alt="" />
              <input type="text" placeholder="Write Something ..." />
              <button>Post</button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{ background: "lightgrey", height: "3px", width: "100%" }}
            ></div>
            <p className="font-bold">Sort by:Relevance</p>
          </div>

          {/* feed posts here */}
          <div className="feedPosts">
            {Allposts.slice(0, 10).map((post) => {
              return (
                <Post
                  id={post.id}
                  created_at={post.created_at}
                  no_of_dislike={post.no_of_dislike}
                  no_of_likes={post.no_of_likes}
                  username={post.username}
                  comments={post.comments}
                  caption={post.caption}
                  reactions={post.reactions}
                  userProfile={
                    "https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg"
                  }
                />
              );
            })}
          </div>
        </section>

        <aside className="right-nav h-screen col-span-3 hidden lg:block">
          <div className="right-nav-activity-card  grid gap-3">
            <h1 className="font-bold text-2xl">Activity</h1>
            <div className="activity-card flex gap-3 items-center">
              <img
                className="w-[60px] h-[60px] rounded-sm"
                src="https://static.vecteezy.com/system/resources/previews/001/131/187/large_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg"
                alt="user"
              />
              <p>
                <span className="font-bold">Joseph</span> started following you
                <span className="block text-sm">5m</span>
              </p>
            </div>
            <div className="activity-card flex gap-3 items-center">
              <img
                className="w-[60px] h-[60px] rounded-sm"
                src="https://th.bing.com/th/id/OIP.ureawKOdt8i8gGv6yqGaLQHaMB?w=998&h=1620&rs=1&pid=ImgDetMain"
                alt="user"
              />
              <p>
                <span className="font-bold">Brake</span> Liked your post
                <span className="block text-sm">5m</span>
              </p>
            </div>
            <div className="activity-card flex gap-3 items-center">
              <img
                className="w-[60px] h-[60px] rounded-sm"
                src="https://thumbs.dreamstime.com/z/mistrustful-man-sly-smile-makes-fun-something-facial-expressions-portrait-isolated-white-91377234.jpg"
                alt="user"
              />
              <p>
                <span className="font-bold">Adam</span> Commented on your post
                <span className="block text-sm">5m</span>
              </p>
            </div>
          </div>

          <div className="right-nav-suggestion-card flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl">Suggested for You</h1>

            <div className="flex items-center gap-4">
              <img
                className="w-[60px] h-[60px] rounded-sm"
                src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                alt="user"
              />
              <p className="flex flex-col">
                <span className="font-bold">John</span>
                <span className="text-sm">@John42</span>
              </p>

              <p className="font-thin ">Following</p>
            </div>

            <div className="activity-card flex gap-3 items-center">
              <img
                className="w-[60px] h-[60px] rounded-sm"
                src="https://th.bing.com/th/id/OIP.PO5TzG86vPlb8tbon-_fygHaFk?w=626&h=471&rs=1&pid=ImgDetMain"
                alt="user"
              />
              <p className="flex flex-col">
                <span className="font-bold">Miguel</span>
                <span className="text-sm">@Miguel421</span>
              </p>

              <p className="font-semibold ">Follow</p>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default FeedsUI;
