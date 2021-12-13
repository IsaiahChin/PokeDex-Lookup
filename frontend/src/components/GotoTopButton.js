import "./GotoTopButton.css";

const GotoTopButton = () => {
  const topButton = document.getElementById("goto-top-button");
  const topButtonAppearThreshold = 400; // Amount in px before button appears

  window.onscroll = () => {
    topButton.style.display =
      document.body.scrollTop > topButtonAppearThreshold ||
      document.documentElement.scrollTop > topButtonAppearThreshold
        ? "grid"
        : "none";
  };

  function gotoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button onClick={gotoTop} id="goto-top-button" title="Go to top">
      ^
    </button>
  );
};

export default GotoTopButton;
