// components/Sidebar.jsx
export default function Sidebar({ items, onItemClick, showSidebar, setShowSidebar, role }) {
  return (
    <div
      className={`${
        showSidebar ? "block" : "hidden"
      } md:block w-full md:w-64 bg-gray-800 text-white p-4 absolute md:relative z-10`}
    >
      <h2 className="text-xl font-bold mb-6 capitalize">{role} Panel</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => onItemClick(item)}
            className="py-2 hover:text-blue-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
