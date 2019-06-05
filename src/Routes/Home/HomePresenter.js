import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({nowSelling,loading, error}) => (
    <>
        <Helmet>
            <title>flowers</title>
        </Helmet>
        {loading? (
            <Loader/>
        ):(
            <Container>
                <Helmet>
                    <title>flowers</title>
                </Helmet>
                {nowSelling && nowSelling.length > 0 && (
                    <Section>
                    {nowSelling.map(movie  =>(
                        <Poster
                            key = {movie.id}
                            id = {movie.id}
                            imageUrl = {movie.poster_path}
                        />
                    ))}
                    </Section>
                )}
                  
                
                
            </Container>
        )}
    </>
);

export default HomePresenter;