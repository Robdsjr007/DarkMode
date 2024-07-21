import React from 'react';
import Toggle from '../../components/Toggle';

function Home({ isDark, setIsDark }) {
  return (
    <section>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
    </section>
  );
}

export default Home;
