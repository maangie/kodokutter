function App() {
  return (
    <div>
      <Tweet
        icon={'\u{1F431}'}
        display_name='吾輩は猫である'
        account_name='neko'
        content='吾輩は猫である。名前はまだ無い。'
      />

      <Tweet
        icon={'\u{2764}'}
        display_name='こころ'
        account_name='kokoro'
        content='私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。'
      />
    </div>
  );
}

// const target = document.querySelector('#app');
// ReactDOM.render(<App />, target);
ReactDOM.render(<App />, app);
