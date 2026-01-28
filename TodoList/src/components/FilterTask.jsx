import React, { useState } from 'react'

function FilterTask ({ filterTask }) {
  const [selected, setSelected] = useState('all')

  function onFilterSelected(e) {
    setSelected(e.target.value)
    filterTask(e.target.value)
  }

  return (
    <div>
      <select value={selected} onChange={onFilterSelected}>
        <option value="all" defaultValue>All</option>
        <option value="true">Completed</option>
        <option value="false">Incompleted</option>
      </select>
    </div>
  )
}

export default FilterTask
