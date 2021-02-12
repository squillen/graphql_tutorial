import React from "react";
import { useQuery } from "@apollo/client";
import Link from "./Link";
import { FEED_QUERY } from './utils/graphql/queries'

const LinkList = () => {
  const { data, loading } = useQuery(FEED_QUERY);

  return (
    <div>
      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        data.feed.links.map((link, index) => (
          <Link index={index} key={link.id} link={link} />
        ))
      )}
    </div>
  );
};

export default LinkList;
