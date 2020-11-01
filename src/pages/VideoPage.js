import React from "react";
import { useParams, Link } from "react-router-dom";

import Video from '../components/Video'

export default function VideoPage() {
  const { id } = useParams();

  return (
    <div>
      <Video id={id}></Video>
    </div>
  );
}
