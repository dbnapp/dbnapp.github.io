import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineFilter = styled.label`
  position: fixed;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.accentSecondary};
  font-size: 24px;
  padding: 0.5em;
  border: 1px solid white;
  transition: all 1s;

  @media (min-width: 768px) {
    right: 50%;
    transform: translateX(50%);
  }

  /* Attempt to normalize select element */
  select,
  option {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  select {
    border: none;
    margin: 3px;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.accentPrimary};
    font-size: 24px;
  }
`;

const EventsContainer = styled.div`
  position: absolute;
  padding: 0 5% 20em;
  transition: all 1s;
  opacity: 1;
  transform: translateY(0%);

  @media (min-width: 768px) {
    padding: 0 20% 20em;
  }
`;
const TimelineContainer = styled.div`
  transition: all 1s;

  &.appear {
    ${EventsContainer} {
      opacity: 0;
      transform: translateY(10%);
    }

    ${TimelineFilter} {
      opacity: 0;
      top: -10%;
    }
  }

  &.enter {
    ${EventsContainer} {
      opacity: 0;
      transform: translateY(10%);
    }

    ${TimelineFilter} {
      opacity: 0;
      top: -10%;
    }
  }

  &.exit {
    ${EventsContainer} {
      opacity: 0;
      transform: translateY(10%);
    }

    ${TimelineFilter} {
      opacity: 0;
      top: -10%;
    }
  }
`;

const EventNode = styled.section`
  margin: 0 0 10em;
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
    position: absolute;
    top: 3em;
    left: 1.4em;
    height: 260%;
    border: 1px solid;
  }
`;

const Date = styled.div`
  position: absolute;
  transform: translate(4em, 1em);
  width: 10em;
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
      <EventsContainer>{eventNodes}</EventsContainer>

      <TimelineFilter htmlFor="event-filter">
        <span>></span>
        <select id="event-filter" value={filter} onChange={filterCallback}>
          <option value="life">Life</option>
          <option value="employment">Employment</option>
        </select>
        <span>Events</span>
      </TimelineFilter>
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Timeline;
