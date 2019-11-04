function TweetInput(props) {
  const textarea_ref = React.useRef(null);

  const send_tweet = React.useCallback(() => {
    if (!textarea_ref.current.value) return;

    props.add_tweet({
      id: new Date().getTime(),
      icon: '\u{1f600}',
      display_name: 'なまえ',
      account_name: 'name',
      content: textarea_ref.current.value
    });

    textarea_ref.current.value = '';
  }, [textarea_ref.current, props.add_tweet]);

  return (
    <div className='tweet_input'>
      <div>
        <textarea className='tweet_textarea' ref={textarea_ref}></textarea>
      </div>

      <div>
        <button onClick={send_tweet} className='send_tweet'>Tweet</button>
      </div>
    </div>
  );
}