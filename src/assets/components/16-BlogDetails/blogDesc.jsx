import React from "react";

import img2 from "../../img/blog_detail-2.png";

export default function BlogDesc() {
  return (
    <>
      <div className="">
        <img
          className="img-fluid blog__detail-head--image"
          src={img2}
          alt="image"
        />
        <div className="">
          <p className="blog__detail-head--desc blog__detail-head--desc---m">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now.
          </p>
          <p className="blog__detail-head--desc">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now.
          </p>
        </div>
        <div className="">
          <h2 className="global__heading blog__detail-head--heading---small">
            Help the helpless who need you.
          </h2>
          <div className="">
            <p className="blog__detail-head--desc blog__detail-head--desc---m">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now.
            </p>
            <p className="blog__detail-head--desc">
              Which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              genera tors on the Internet tend to repeat predefined chunks as
              necessary, making this the first true genera tor on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence
            </p>
          </div>
        </div>
        <div className="blog__detail-box">
          <p className="blog__detail-box--desc">
            “ Which don't look even slightly believable. If you are going to use
            a passage of Lorem Ipsum, you need to be sure there isn't anything
            embarrassing hidden in the middle of text. All the Lorem Ipsum
            genera tors on the Internet tend to repeat predefined chunks as
            necessary, making this the first true genera tor on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
            of model sentence ”
          </p>
        </div>
        <div className="">
          <p className="blog__detail-head--desc blog__detail-head--desc---m">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now.
          </p>
          <p className="blog__detail-head--desc">
            Which don't look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure there isn't anything
            embarrassing hidden in the middle of text. All the Lorem Ipsum
            genera tors on the Internet tend to repeat predefined chunks as
            necessary, making this the first true genera tor on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
            of model sentence
          </p>
        </div>
      </div>
    </>
  );
}
