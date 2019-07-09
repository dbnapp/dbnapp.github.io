import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineContainer = styled.div``;

const TimelineFilter = styled.select``;

const EventNode = styled.div``;

const Title = styled.h1``;

const renderEvent = (event, i) => (
  <EventNode key={i}>
    <Title>{event.title}</Title>
  </EventNode>
);

const Timeline = ({ events }) => {
  const [filter, updateFilter] = useState('default');

  const eventNodes = useMemo(() => {
    let filteredEvents = events;
    if (filter !== 'default') {
      filteredEvents = events.filter(event => event.type === filter);
    }
    return filteredEvents.map(renderEvent);
  }, [events, filter]);

  const filterCallback = useCallback(e => updateFilter(e.target.value), [updateFilter]);

  return (
    <TimelineContainer>
      {eventNodes}
      <TimelineFilter value={filter} onChange={filterCallback}>
        <option value="default">Default</option>
        <option value="employment">Employment</option>
      </TimelineFilter>
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Timeline;
