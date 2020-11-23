import React, { FC, PropsWithChildren } from 'react';
import ReactModal from 'react-modal';

import styles from './Modal.module.less';

export type TModal = {
  isOpen: boolean;
  setIsOpen: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  setIsClose: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal: FC<PropsWithChildren<TModal>> = ({ isOpen, setIsOpen, setIsClose, children }) => {
  return (
    <ReactModal className={styles.modal} overlayClassName={styles.modal__overlay} isOpen={isOpen} ariaHideApp={false}>
      <div className={styles.modal__close}>
        <button className={styles.modal__closeButton} type="button" onClick={setIsClose}>
          close
        </button>
      </div>
      <div className={styles.modal__content}>{children}</div>
    </ReactModal>
  );
};

export default Modal;
