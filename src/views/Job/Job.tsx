import React from "react";
import { useParams } from "react-router-dom";
import { Title } from "components/atoms/Title/Title";

interface Props {}

const Job = (props: Props) => {
  const { id } = useParams();
  return <Title>Job: {id}</Title>;
};

export default Job;
