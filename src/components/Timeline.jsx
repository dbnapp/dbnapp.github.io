import React, { useReducer, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimelineEvent from './TimelineEvent';

const TimelineFilter = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.accentSecondary};
  font-size: 24px;
  padding: 0 0 0 0.5em;
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
    width: 6.5em;
    height: 2.5em;
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

const actionType = {
  SELECT_EVENT: 'SELECT_EVENT',
  FILTER: 'FILTER',
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

const renderEvent = (event, selectedEventDate, dispatch) => {
  const isSelected = event.date === selectedEventDate;

  const selectEvent = () => {
    dispatch({
      type: actionType.SELECT_EVENT,
      selectedEventDate: event.date,
    });
  };

  return (
    <TimelineEvent
      key={event.date}
      event={event}
      isSelected={isSelected}
      onSelectEventClick={selectEvent}
    />
  );
};

const Timeline = ({ events }) => {
  const [state, dispatch] = useReducer(reducer, {
    filter: 'all',
    selectedEventDate: events[0].date,
  });
  const { filter, selectedEventDate } = state;

  const eventNodes = useMemo(() => {
    let filteredEvents = events;
    if (filter !== 'all') {
      filteredEvents = events.filter(event => event.type === filter);
    }
    return filteredEvents.map(event => renderEvent(event, selectedEventDate, dispatch));
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
          <option value="all">All History</option>
          <option value="work">Work History</option>
        </select>
      </TimelineFilter>
    </TimelineContainer>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Timeline;
