export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case "TOGGLE_PAGE":
      const links = [...state.links].map((i) =>
        i.text === action.payload
          ? { ...i, showPage: !i.showPage }
          : { ...i, showPage: false }
      );
      const anyLinkClicked = (links) =>
        links.filter((i) => i.showPage === true).length > 0 ? true : false;

      return { links, anyLinkClicked: anyLinkClicked(links) };
  }
};
