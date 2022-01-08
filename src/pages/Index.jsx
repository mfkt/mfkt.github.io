import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import {
  getLanguages,
  getProgrammings,
  getTechnologies,
} from '../services/fireService';
import Navigation from '../components/Navigation';

// markup
const IndexPage = () => {
  const { t } = useTranslation();

  // const [languages, setLanguages] = useState(null);
  // const [programming, setProgramming] = useState(null);
  const [technologies, setTechnologies] = useState(null);

  useEffect(() => {
    getLanguages()
      .then((data) => {
        // setLanguages(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    getProgrammings()
      .then((data) => {
        // setProgramming(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    getTechnologies('ngqtcwrQ1ZgoaEfgSUka')
      .then((data) => {
        setTechnologies(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navigation />
      <p>
        <Trans>Welcome to my Gatsby site!</Trans>
      </p>
      {t(technologies ? 'technologies' : 'loading')}
    </>
  );
}

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
