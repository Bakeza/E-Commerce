import React from "react";

import { BsCheck2 } from "react-icons/bs";
import { CheckList, DescList, DescriptionDiv, Table, TData } from "./style";

export default function ItemDescription() {
  return (
    <DescriptionDiv>
      <DescList>
        <li>Description</li>
        <li>Reviews</li>
        <li>Shipping</li>
        <li>About company</li>
      </DescList>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <Table>
          <thead>
            <tr>
              <TData className="type">Model</TData>
              <TData className="info">#8786867</TData>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TData className="type">Style</TData>
              <TData className="info">Classic style</TData>
            </tr>
            <tr>
              <TData className="type">Certificate</TData>
              <TData className="info">ISO-898921212</TData>
            </tr>
            <tr>
              <TData className="type">Size</TData>
              <TData className="info">34mm x 450mm x 19mm</TData>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <TData className="type">Memory</TData>
              <TData className="info">36GB RAM</TData>
            </tr>
          </tfoot>
        </Table>
        <CheckList>
          <li>
            <BsCheck2 />
            <p> Some great feature name here</p>
          </li>
          <li>
            <BsCheck2 />
            <p> Lorem ipsum dolor sit amet, consectetur</p>{" "}
          </li>
          <li>
            <BsCheck2 /> <p>Duis aute irure dolor in reprehenderit</p>
          </li>
          <li>
            <BsCheck2 /> <p>Some great feature name here</p>
          </li>
        </CheckList>
      </div>
    </DescriptionDiv>
  );
}
