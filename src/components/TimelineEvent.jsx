import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const EventIcon = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  border: 2px solid;
  border-radius: 50%;
`;

const EventLine = styled.div`
  display: inline-block;
  position: absolute;
  top: 3.7em;
  left: 2em;
  height: calc(100% + 6.7em);
  border: 1px solid;
`;

const EventDetails = styled.div`
  display: none;
  opacity: 0;
  transition: all 0.5s;
`;

const breathingHighlight = keyframes`
  to{
    border-color: white;
  }
`;

const EventNode = styled.section`
  position: relative;
  margin: 0 0 10em;
  padding: 0.5em;

  &.selected {
    ${EventIcon} {
      border-color: ${({ theme }) => theme.accentPrimary};
      animation: ${breathingHighlight} 0.5s ease-in-out infinite alternate;
    }
  }

  ${EventDetails} {
    &.enter {
      display: block;
      opacity: 0;
    }
    &.enter-done {
      display: block;
      opacity: 1;
    }
  }

  &:last-child {
    ${EventLine} {
      border: 1px dashed;
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
  color: ${({ theme }) => theme.accentTertiary};
`;

const Keyword = styled.li``;

const Description = styled.p`
  position: relative;
  left: 2.6em;
  max-width: 80%;
`;

const TimelineEvent = ({ event, isSelected, onSelectEventClick }) => {
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
    <EventNode className={isSelected ? 'selected' : ''}>
      <EventIcon onClick={onSelectEventClick} />
      <EventLine />
      <Date onClick={onSelectEventClick}>{event.date}</Date>
      <Title onClick={onSelectEventClick}>{event.title}</Title>
      <CSSTransition appear in={isSelected} timeout={{ enter: 500, exit: 500 }}>
        <EventDetails>
          {keywords && <Keywords>{event.keywords.join(', ')}</Keywords>}
          {descriptions}
        </EventDetails>
      </CSSTransition>
    </EventNode>
  );
};

TimelineEvent.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    keywords: PropTypes.array,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    images: PropTypes.array,
  }).isRequired,
  isSelected: PropTypes.bool,
  onSelectEventClick: PropTypes.func,
};

TimelineEvent.defaultProps = {
  isSelected: false,
  onSelectEventClick: () => {},
};

export default TimelineEvent;
