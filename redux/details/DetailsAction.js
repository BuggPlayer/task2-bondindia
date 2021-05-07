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
}
