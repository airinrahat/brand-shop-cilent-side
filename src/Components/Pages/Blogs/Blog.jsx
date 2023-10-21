/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            1. What are the CRUD operations in MongoDB using Express?
          </div>
          <div className="collapse-content">
            <p>
              Build Crud API with Node. js, Express, and MongoDB
              <br />
              1.Create (POST) - Make something.
              <br />
              2.Read (GET)- Get something.
              <br />
              3. Update (PUT) - Change something.
              <br />
              4. Delete (DELETE)- Remove something.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            2. What is an access token and refresh token? How do they work and
            where should we store them on the client-side ?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Refresh tokens provide a way to bypass the temporary nature of
              access tokens. Normally, a user with an access token can only
              access protected resources or perform specific actions for a set
              period of time, which reduces the risk of the token being
              compromised. A refresh token allows the user to get a new access
              token without needing to log in again. Though these tokens can be
              extremely helpful, they should be used properly. This guide will
              give an in-depth explanation of refresh tokens and discuss some
              best practices for creating and handling them.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            3. What is MongoDB aggregate and how does it work ?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              What is Aggregation in MongoDB? Aggregation is a way of processing
              a large number of documents in a collection by means of passing
              them through different stages. The stages make up what is known as
              a pipeline. The stages in a pipeline can filter, sort, group,
              reshape and modify documents that pass through the pipeline.s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
