export default function TabBar({ $app, initialState, onClick }) {
  this.state = initialState;
  this.onCLick = onClick;

  this.$target = document.createElement("div");
  this.$target.className = "tab-bar";
  $app.appendChild(this.$target);

  this.template = () => {
    let temp =
      '<div id = "all">전체</div><div id="penguin">펭귄</div><div id="koala">코알라</div><div id="panda">판다</div>';
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    let $currentTab = document.getElementById(this.state);
    // $currentTab ? ($currentTab.className = 'clicked) : ''; // 삼항 연산자
    $currentTab && ($currentTab.className = "clicked"); // AND로 삼항 연산자 대체

    const $tabBar = this.$target.querySelectorAll("div");
    $tabBar.forEach((elm) => {
      elm.addEventListener("click", () => {
        onClick(elm.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
