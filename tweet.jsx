function Tweet(props) {
  const [liked, setLike] = React.useState(false);

  const toggleLike = React.useCallback(() => setLike(prev => !prev), [setLike]);

  return (
    <div className='tweet'>
      <div className='icon_container'>{props.icon}</div>

      <div className='body_container'>
        <div className='status_display'>
          <span className='display_name'>{props.display_name}</span>
          <span className='account_name'>@{props.account_name}</span>
        </div>

        <div className='content'>{props.content}</div>

        <div className='status_action'>
          <span onClick={toggleLike}>{liked ? '\u{2764}' : '\u{2661}'}</span>
        </div>
      </div>
    </div>
  );
}
