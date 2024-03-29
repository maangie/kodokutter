function App() {
  const [tweets, set_tweets] = React.useState([
    {
      id: 0,
      icon: '\u{1F431}',
      display_name: '吾輩は猫である',
      account_name: 'neko',
      content: '吾輩は猫である。名前はまだ無い。'
    },
    {
      id: 1,
      icon: '\u{2764}',
      display_name: 'こころ',
      account_name: 'kokoro',
      content: '私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。'
    }
  ]);

  const add_tweet =
    React.useCallback(tweet => set_tweets(prev => [tweet, ...prev]),
                      [set_tweets]);

  return (
    <div>
      <TweetInput add_tweet={add_tweet} />
      <Timeline tweets={tweets} />
    </div>
  );
}

// const target = document.querySelector('#app');
// ReactDOM.render(<App />, target);
ReactDOM.render(<App />, app);
