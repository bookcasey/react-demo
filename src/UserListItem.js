import './UserListItem.css'

function UserListItem({ name, tech, color }) {
  return (
    <li className='user-list-item' style={{ backgroundColor: color }}>{name} working on {tech}</li>
  )
}

export default UserListItem;