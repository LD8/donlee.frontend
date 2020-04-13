export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "TOGGLE_PAGE":
      return {
        ...state,
        links: [...state.links].map((i) =>
          i.text === action.payload
            ? { ...i, showPage: !i.showPage }
            : { ...i, showPage: false }
        ),
      };
    case "TOGGLE_LINKS":
      return {
        ...state,
        anyLinkClicked: action.payload,
      };
  }
};
