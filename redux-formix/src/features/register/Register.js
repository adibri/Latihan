import React from 'react';
import styles from './Register.module.css';

function Register() {
  const onSubmitRegister = React.useCallback(
    () => (window.location.href = '/register'),
    []
  );
  return (
    <div>
      <form method="post" action="register" onSubmit={onSubmitRegister}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
          <div className={styles.col}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <div className={styles.col}>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
