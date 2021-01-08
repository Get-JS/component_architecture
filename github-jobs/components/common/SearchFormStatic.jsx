import React from 'react'

export function SearchFormStatic({
  onSubmit,
  onChange,
  suggestions,
  isLoading,
  value,
  onSuggestionClick,
}) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input type="search" value={value} onChange={onChange} />
      {isLoading ? (
        <ul className="loading suggestions">...</ul>
      ) : (
        suggestions &&
        suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((s) => (
              <li
                key={s}
                onClick={() =>
                  typeof onSuggestionClick === "function" &&
                  onSuggestionClick(s)
                }
              >
                <div>{s}</div>
              </li>
            ))}
          </ul>
        )
      )}
      <button>Search</button>
    </form>
  );
}
