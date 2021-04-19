import {
  BackGround,
  ModalContainer,
  ConfirmRow,
  ClearAll,
  RemainAll,
  ModalTitle,
  ModalBody,
} from "./styled";

const CartModal = ({ showModal, setShowModal, deleteAll }) => {
  return (
    <>
      {showModal ? (
        <BackGround>
          <ModalContainer>
            <ModalTitle>Delete this Stream?</ModalTitle>
            <hr />
            <ModalBody>
              Would you like to remove all items from the cart?
            </ModalBody>
            <hr />
            <ConfirmRow>
              <ClearAll onClick={deleteAll}>Yes</ClearAll>
              <RemainAll>No</RemainAll>
            </ConfirmRow>
          </ModalContainer>
        </BackGround>
      ) : null}
    </>
  );
};
export default CartModal;
