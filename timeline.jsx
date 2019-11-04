function Timeline(props) {
  const tweet_list = props.tweets.map(tw => (
    <Tweet
      key={tw.id}
      icon={tw.icon}
      display_name={tw.display_name}
      account_name={tw.account_name}
      content={tw.content}
    />
  ));

  return <div className='timeline'>{tweet_list}</div>;
}