import React from 'react';
import {gql, useQuery} from '@apollo/client';

const GET_USER = gql`
    query{
        user {
            name
            age
        }
    }
`;

function User() {
    const {loading, error, data} = useQuery(GET_USER);

    if(loading) return <div>Loading..</div>
    if(error) return <div>Error</div>
  return (
    <div>
      Hello World from User
      <div>
          data object = {JSON.stringify(data)}
          <br/>
          Name = {data.user.name}
          <br />
          age = {data.user.age}
      </div>
    </div>
  );
}

export default User;
