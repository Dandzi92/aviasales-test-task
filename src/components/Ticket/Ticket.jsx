import React from 'react';
import styles from './styles.module.scss';
import TicketSection from '../TicketSection';
import PropTypes from 'prop-types';

const Ticket = ({ price, icon, ticketSections }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.head}>
        <div className={styles.price}>{price}</div>
        <img src={icon} alt="" />
      </div>

      <div className={styles.sections}>
        {ticketSections.map((item, index) => {
          const data = Object.entries(item);

          const header = data[0][0];
          const content = data[0][1];

          return <TicketSection header={header} content={content} key={index} />;
        })}
      </div>
    </div>
  );
};

Ticket.propTypes = {
  price: PropTypes.string,
  icon: PropTypes.string,
  ticketSections: PropTypes.array,
};

export default Ticket;
