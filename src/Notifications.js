function Notifications({ notifications = [] }) {
  // if (!notifications.length) return;

  // if (notifications.length > 0) {
  //   return <p>There are {notifications.length} notifications</p>
  // } else {
  //   return;
  // }

  //return notifications.length > 0 ? <p>There are {notifications.length} notifications</p> : "";

  return notifications.length > 0 && <p>There are {notifications.length} notifications</p>;
}

export default Notifications;