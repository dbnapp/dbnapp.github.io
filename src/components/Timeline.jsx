import React, { useReducer, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const TimelineFilter = styled.label`
  position: fixed;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.accentSecondary};
  font-size: 24px;
  padding: 0.5em;
  background: #00072d;
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

const EventNodeIcon = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  border: 2px solid;
  border-radius: 50%;
`;

const EventNodeLine = styled.div`
  display: inline-block;
  position: absolute;
  top: 3.7em;
  left: 2em;
  height: 230%;
  border: 1px solid;
`;

const EventDetails = styled.div`
  display: none;
`;

const EventNode = styled.section`
  position: relative;
  margin: 0 0 10em;
  padding: 0.5em;

  &.selected {
    ${EventNodeIcon} {
      border-color: ${({ theme }) => theme.accentPrimary};
    }

    ${EventDetails} {
      display: block;
    }
  }
`;

const Date = styled.div`
  position: absolute;
  transform: translate(4em, 0.2em);
  width: 10em;
`;

const Title = styled.h1`
  position: relative;
  left: 2.6em;
  max-width: 90%;
  font-weight: normal;
`;

const Keywords = styled.ul`
  position: relative;
`;

const Keyword = styled.li``;

const Description = styled.p`
  position: relative;
  left: 2.6em;
  max-width: 80%;
`;

const actionType = {
  SELECT_EVENT: 'SELECT_EVENT',
  FILTER: 'FILTER',
};

const renderEvent = (event, i, selectedEventDate, dispatch) => {
  let keywords = null;
  let descriptions = null;
  const hasMultilineDescription = event.description && event.description instanceof Array;
  const isSelected = event.date === selectedEventDate;

  const selectEvent = () => {
    dispatch({
      type: actionType.SELECT_EVENT,
      selectedEventDate: event.date,
    });
  };

  if (event.keywords) {
    keywords = event.keywords.map(kw => <Keyword key={kw}>{kw}</Keyword>);
  }

  if (hasMultilineDescription) {
    descriptions = event.description.map(desc => <Description key={desc}>{desc}</Description>);
  } else if (event.description) {
    descriptions = <Description>{event.description}</Description>;
  }

  return (
    <EventNode key={event.date} className={isSelected ? 'selected' : ''}>
      <EventNodeIcon onClick={selectEvent} />
      <EventNodeLine />
      <Date onClick={selectEvent}>{event.date}</Date>
      <Title onClick={selectEvent}>{event.title}</Title>
      <CSSTransition in={isSelected} timeout={{ enter: 1000, exit: 500 }}>
        <EventDetails>
          {keywords && <Keywords>{event.keywords}</Keywords>}
          {descriptions}
        </EventDetails>
      </CSSTransition>
    </EventNode>
  );
};

const reducer = (state, action) => {
  const { selectedEventDate, filter } = action;
  switch (action.type) {
    case actionType.FILTER:
      return {
        filter,
        selectedEventDate: null,
      };
    case actionType.SELECT_EVENT:
      return {
        ...state,
        selectedEventDate,
      };
    default:
      return state;
  }
};

const Timeline = ({ events }) => {
  const [state, dispatch] = useReducer(reducer, {
    filter: 'life',
    selectedEventDate: events[0].date,
  });
  const { filter, selectedEventDate } = state;

  const eventNodes = useMemo(() => {
    let filteredEvents = events;
    if (filter !== 'life') {
      filteredEvents = events.filter(event => event.type === filter);
    }
    return filteredEvents.map((event, i) => renderEvent(event, i, selectedEventDate, dispatch));
  }, [events, filter, selectedEventDate]);

  const filterCallback = useCallback(
    e => dispatch({ type: actionType.FILTER, filter: e.target.value }),
    [dispatch],
  );

  return (
    <TimelineContainer>
      <EventsContainer>{eventNodes}</EventsContainer>

      <TimelineFilter htmlFor="event-filter">
        <span>&gt;</span>
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
