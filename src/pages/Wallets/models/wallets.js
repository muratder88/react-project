export default {
  namespace: 'wallets',

  state: {
    isModalOpen: false,
    confirmModal: false,
    labelModal: false,
    labelModalFromWeb: false,
    verificationModal : false,
  },
  effects: {
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
    }),
    toggleLabelModal: (state) => ({
      ...state,
      labelModal: !state.labelModal,
    }),
    toggleLabelModalFromWeb: (state) => ({
      ...state,
      labelModalFromWeb: !state.labelModalFromWeb
    }),
    toggleVerificationModal: (state) => ({
      ...state,
      verificationModal: !state.verificationModal,
    })
  },
};
