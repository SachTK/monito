import RootWrapper from "@/components/common/rootWrapper/RootWrapper";
import React from "react";
import blogData from "./data";
import Button from "@/components/common/button/Button";
import BlogCard from "@/components/common/card/BlogCard";
import rightArrowOutline from "./assets/rightArrowOutline.svg";

const Blog = () => {
  return (
    <RootWrapper className={" py-[40px]  lg:py-[60px]"}>
      <div className="flex justify-between md:pb-[28px]">
        <div>
          <p className="bodyText3 medium">You already know ?</p>
          <p className="bodyText1 bold text-[#003459]">Useful pet knowledge</p>
        </div>
        <Button
          name="View more"
          link="#"
          outline
          medium
          className={"hidden md:flex"}
          icon={rightArrowOutline}
        />
      </div>
      <div className="flex gap-[12px] md:gap-[20px] flex-wrap justify-center mb-[16px]">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            tag={blog.tag}
            title={blog.title}
            desc={blog.desc}
          />
        ))}
      </div>
      <Button
        name="View more"
        link="#"
        outline
        className={"justify-center md:hidden"}
        icon={rightArrowOutline}
      />
    </RootWrapper>
  );
};

export default Blog;
