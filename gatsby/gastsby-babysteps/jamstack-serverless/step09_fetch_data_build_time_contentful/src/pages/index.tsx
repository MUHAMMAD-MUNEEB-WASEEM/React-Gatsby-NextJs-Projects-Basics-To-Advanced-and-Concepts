import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({data}) => {
    console.log(data);
    return (
        <div>
           
            <div>{documentToReactComponents(data.allContentfulPost.edges[0].node.content.json)}</div>

        </div>
    );
}







export const query = graphql`
  query {
    allContentfulPost {
        edges {
          node {
            content{
              json
            }
            
          }
        }
      }
  }
`