export default {
  namespace: 'wallets',

  state: {
    isModalOpen: false,
    confirmModal: false,
  },
  effects: {
    *toggleModal(payload, { put }) {
      yield put({
        type: 'openModal',
      });
    },
  },

  reducers: {
    toogleModal(state) {
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    },
    toggleConfirmModal: (state) => ({
      ...state,
      confirmModal: !state.confirmModal,
    })
  },
};
