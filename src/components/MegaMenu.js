function MegaMenu({ title, items }) {
  return (
    <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <h4 className="font-medium text-gray-800 hover:text-blue-600 cursor-pointer">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MegaMenu
