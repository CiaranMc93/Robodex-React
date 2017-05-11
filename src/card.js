import React from 'react';
import PropTypes from 'proptypes';
import {Media} from './media';
import {Heading} from './heading';
import {SubHeading} from './subHeading';

//this is our own module
//utilise the components we created - Media, Heading and SubHeading
export const Card = ({ name, id, email}) => (
  <article className="w5 mr3 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <Media
        src={`https://robohash.org/${id}`}
        title='Photo of a robot'
        />
      <Heading>{ name }</Heading>
      <SubHeading>{ email }</SubHeading>
    </div>
  </article>
);

//define the card properties
Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
}
