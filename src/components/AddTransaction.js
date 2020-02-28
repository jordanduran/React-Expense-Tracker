import React, { Fragment } from 'react';

export const AddTransaction = () => {
  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input type='text' name='text' placeholder='Enter text...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type='number' name='amount' placeholder='Enter amount...' />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </Fragment>
  );
};
