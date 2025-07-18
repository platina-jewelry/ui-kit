import React from 'react';
import './App.css';
import { Button } from '@platina-jewelry/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UI Kit Песочница</h1>

        <div style={{ display: 'flex', gap: '10px', margin: '20px', flexDirection: 'column' }}>
          <Button
            title="Primary Button"
            onPress={() => alert('Primary нажато!')}
            variant="primary"
          />

          <Button
            title="Secondary Button"
            onPress={() => alert('Secondary нажато!')}
            variant="secondary"
          />

          <Button
            title="Danger Button"
            onPress={() => alert('Danger нажато!')}
            variant="danger"
          />

          <Button
            title="Small Button"
            onPress={() => alert('Small нажато!')}
            size="small"
          />

          <Button
            title="Large Button"
            onPress={() => alert('Large нажато!')}
            size="large"
          />

          <Button
            title="Loading Button"
            onPress={() => alert('Loading нажато!')}
            loading={true}
          />

          <Button
            title="Disabled Button"
            onPress={() => alert('Disabled нажато!')}
            disabled={true}
          />
        </div>
      </header>
    </div>
  );
}

export default App;