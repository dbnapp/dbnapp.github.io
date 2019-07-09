import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  position: absolute;
  opacity: 0;
  padding: 0 5% 20em;
  transition: all 1s;

  @media (min-width: 768px) {
    padding: 0 20% 20em;
  }

  &.appear {
    opacity: 0;
    transform: translateY(10%);
  }

  &.enter {
    opacity: 0;
    transform: translateY(10%);
  }

  &.enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.exit {
    opacity: 0;
    transform: translateY(10%);
  }

  &.exit-done {
    opacity: 0;
    transform: translateY(10%);
  }
`;

const TimelineFilter = styled.select``;

const EventNode = styled.section`
  margin: 10em 0;
  padding: 0.5em;
`;

const EventNodeIcon = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  border: 2px solid;
  border-radius: 50%;
  :after {
    content: '';
    display: inline-block;
    height: 350px;
    border: 2px solid;
  }
`;

const Date = styled.div`
  position: absolute;
  transform: translate(4em, 1em);
`;

const Title = styled.h1``;

const Keywords = styled.ul``;
const Keyword = styled.li``;

const Description = styled.p``;

const renderEvent = (event) => {
  let keywords = null;
  let descriptions = null;
  const hasMultilineDescription = event.description && event.description instanceof Array;

  if (event.keywords) {
    keywords = event.keywords.map(kw => <Keyword key={kw}>{kw}</Keyword>);
  }

  if (hasMultilineDescription) {
    descriptions = event.description.map(desc => <Description key={desc}>{desc}</Description>);
  } else if (event.description) {
    descriptions = <Description>{event.description}</Description>;
  }

  return (
    <EventNode key={event.date}>
      <EventNodeIcon />
      <Date>{event.date}</Date>
      {/* <Title>{event.title}</Title>
      {keywords && <Keywords>{event.keywords}</Keywords>}
      {descriptions} */}
    </EventNode>
  );
};

const Timeline = ({ events }) => {
  const [filter, updateFilter] = useState('life');

  const eventNodes = useMemo(() => {
    let filteredEvents = events;
    if (filter !== 'life') {
      filteredEvents = events.filter(event => event.type === filter);
    }
    return filteredEvents.map(renderEvent);
  }, [events, filter]);

  const filterCallback = useCallback(e => updateFilter(e.target.value), [updateFilter]);

  return (
    <TimelineContainer>
      <TimelineFilter value={filter} onChange={filterCallback}>
        <option value="life">Life</option>
        <option value="employment">Employment Only</option>
      </TimelineFilter>
      {eventNodes}
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Timeline;
