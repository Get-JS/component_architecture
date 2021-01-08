import React, { useState } from 'react';

import { SearchFormStatic } from '../../common/SearchFormStatic';

import { useSearchSuggestions } from '../../../hooks/useSearchSuggestions';

export function SearchForm({ onKeywordChange }) {
  const [term, setTerm] = useState('');
  const { suggestions, isLoading } = useSearchSuggestions(term);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const dispatchKeywordChange = (k) => {
    typeof onKeywordChange === 'function' && onKeywordChange(k);
    setShowSuggestions(false);
  };

  return (
    <SearchFormStatic
      onSubmit={(e) => {
        e.preventDefault();
        dispatchKeywordChange(term);
      }}
      onChange={(e) => {
        setTerm(e.target.value);
        setShowSuggestions(true);
        if (e.target.value.length === 0) dispatchKeywordChange('');
      }}
      onSuggestionClick={(s) => {
        setTerm(s);
        dispatchKeywordChange(s);
      }}
      value={term}
      suggestions={showSuggestions && suggestions}
      isLoading={isLoading}
    />
  );
}
