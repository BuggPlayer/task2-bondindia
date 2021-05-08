export default class DetailsAction {
  static getDetailsRequest(requestdata) {
    return {
      type: 'ADD_USER_REQUEST',
      payload: requestdata,
    };
  }

  static getDetailsSuccess(succesData) {
    return {
      type: 'ADD_USER_SUCCESS',
      payload: succesData,
    };
  }
  static setModalState(state) {
    return {
      type: 'CLOSE_MODAL',
      payload: state,
    };
  }
}
