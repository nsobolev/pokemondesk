import React, { FC, PropsWithChildren, useRef } from 'react';
import ReactModal from 'react-modal';

import classNames from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import styles from './Modal.module.less';
import { ReactComponent as CloseSVG } from './assets/close.svg';

export type TModal = {
  isOpen: boolean;
  withoutPadding?: boolean;
  setIsClose: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal: FC<PropsWithChildren<TModal>> = ({ isOpen, setIsClose, children, withoutPadding }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const afterOpenModal = () => {
    if (modalRef.current) {
      disableBodyScroll(modalRef.current);
    }
  };

  const afterCloseModal = () => {
    if (modalRef.current) {
      enableBodyScroll(modalRef.current);
    }
  };

  return (
    <ReactModal
      className={classNames(styles.modal, { [styles.modal_withoutPadding]: withoutPadding })}
      overlayClassName={styles.modal__overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      onAfterOpen={afterOpenModal}
      onAfterClose={afterCloseModal}>
      <div ref={modalRef}>
        <div className={styles.modal__close}>
          <button className={styles.modal__closeButton} type="button" onClick={setIsClose}>
            <CloseSVG className={styles.modal__closeSvg} />
          </button>
        </div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = {
  withoutPadding: false,
};

export default Modal;
