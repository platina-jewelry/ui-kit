# @platina-jewelry/button

**Универсальная кнопка для React и React Native от Platina Jewelry**

---

## Установка

```bash
npm install @platina-jewelry/button
# или
yarn add @platina-jewelry/button
```

Использование
React (веб)

```bash
import React from 'react';
import { Button } from '@platina-jewelry/button';

function App() {
  return (
    <Button onClick={() => alert('Нажато!')}>
      Нажми меня
    </Button>
  );
}

export default App;

```

React Native
```bash
import React from 'react';
import { Button } from '@platina-jewelry/button';

function App() {
  return (
    <Button onPress={() => alert('Нажато!')}>
      Нажми меня
    </Button>
  );
}

export default App;
```

## API

| Пропс          | Тип               | Описание                        | По умолчанию |
| -------------- | ----------------- | ------------------------------- | ------------ |
| `children`     | `React.ReactNode` | Контент внутри кнопки           | —            |
| `onClick`      | `function`        | Обработчик клика (для веб)      | —            |
| `onPress`      | `function`        | Обработчик нажатия (для Native) | —            |
| `disabled`     | `boolean`         | Отключение кнопки               | `false`      |
| `...остальные` | `any`             | Дополнительные свойства         | —            |


```bash
# Установка зависимостей
npm install

# Сборка
npm run build

# Запуск тестов
npm test

# Проверка линтинга
npm run lint

# Публикация
npm publish public
npm publish --//registry.npmjs.org/:_authToken=ВАШ_ТОКЕН


```

