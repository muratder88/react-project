export default {
  namespace: 'wallets',

  state: {
    isModalOpen: false,
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
      console.log('it is coming here ', state);
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    },
  },
};
